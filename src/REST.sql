CREATE OR REPLACE PACKAGE REST AS 

  /* TODO enter package declarations (types, exceptions, methods etc) here */ 
  
    gv_package varchar2(100) := 'rest';
  
    procedure log_message (p_in_api_id number, p_in_payload in clob);
    
    function get_blog_text(p_in_id in number) return t_tblo_text pipelined;
    
    function get_blog_title return t_tblo_blogtitle pipelined;
    
    function get_rows_by_deptno(p_in_deptno in dept.deptno%type) return t_dept_tblo pipelined;

END REST;
/


CREATE OR REPLACE PACKAGE BODY REST AS 

 

------------------------------------------------------------------------------
--  procedure: log_message
--  created:  Shazib Saleem warraich, 2020-10-18
--  desc:     log rest calls
--  used by:  called by rest related func and procs
------------------------------------------------------------------------------ 
procedure log_message (p_in_api_id number, p_in_payload in clob)
 is
    pragma autonomous_transaction;
    lv_module_name varchar2(64):= gv_package||'.log_message';
    
      begin 
                insert into rest_call_detail (api_id, api_payload) 
                       values(p_in_api_id, p_in_payload);
           commit;
           
end log_message;         

------------------------------------------------------------------------------
--  function: get_blog_text
--  created:  Shazib Saleem warraich, 2020-10-18
--  desc:     function returns blog text objects piplined
--  used by:  called by rest service text/aboutme
------------------------------------------------------------------------------  
function get_blog_text(p_in_id in number) return t_tblo_text pipelined
 as
 lv_module_name varchar2(100):= gv_package|| 'get_blog_text'; 
 lv_api_id number:= 1; 
 lv_payload clob;
 begin
       select  json_object('text' value  text  format json)
                into lv_payload from blog_text where text_id = lv_api_id;
       
        for i in (select text_id, text from blog_text where text_id =  p_in_id) loop
            pipe row (t_text_obj(i.text_id, i.text));
            end loop;
            log_message (lv_api_id, lv_payload);
   return;
 
 end get_blog_text;
 
 ------------------------------------------------------------------------------
--  function: get_blog_title
--  created:  Shazib Saleem warraich, 2020-10-18
--  desc:     function returns blog title objects piplined
--  used by:  called by rest service blog/blogtitle
------------------------------------------------------------------------------  
  function get_blog_title return t_tblo_blogtitle pipelined
  is
  lv_module_name varchar2(100):= gv_package|| 'get_blog_title'; 
  lv_api_id number:= 2; 
  lv_payload clob;
  lv_url varchar(100);
 begin    
 
        select to_char(substr(link, 1,46)) 
        into  lv_url 
            from blog_title where rownum = 1;
 
          select json_arrayagg ('blog_id : '||blog_id
                         ||' '||'title : '||title
                         ||' '||'created : '||created
                         ||' '||'endpoints : '||endpoints
                         ||' '||'vote :'||vote||' '||'rating :'||rating) items into lv_payload
            from (    
                    select bf.blog_id as blog_id , bt.title as title,  bt.created as created, 
                    replace(bt.link, lv_url) as endpoints,
                    count(bf.blog_id) as vote, 
                    (round(avg(bf.rating),2)) as rating 
                        from blog_feedback bf
                        join blog_title bt 
                        on bf.blog_id = bt.title_id 
                        where bf.rating !=0
                             group by blog_id, bf.blog_id, bt.title, bt.created, bt.link
                             order by bt.created desc);              
                             
            
        
        for i in ( select bf.blog_id blog_id, bt.title title, bt.created created, 
                      bt.link url, count(bf.blog_id) vote, round(avg(bf.rating),2) rating 
                        from blog_feedback bf
                        join blog_title bt 
                        on bf.blog_id = bt.title_id 
                        where bf.rating !=0
                             group by blog_id, bf.blog_id, bt.title, bt.created, bt.link
                             order by bt.created desc) loop
                        pipe row (t_blogtitle_obj(i.blog_id, i.title, i.created, i.url, i.vote, i.rating));
                 end loop;
            log_message (lv_api_id, lv_payload);
   return;
 
 end get_blog_title;
 
 
 function get_rows_by_deptno(p_in_deptno in dept.deptno%type) return t_dept_tblo pipelined
  is
    lv_module_name varchar2(100):= gv_package|| 'get_rows_by_deptno'; 
    get_rows_deptno logic.dept_rec_tbl;   
    lv_api_id number:= 3;
    lv_api_type varchar2(10):= 'GET';
    lv_payload clob;
  
  begin
        get_rows_deptno:=logic.dept_rec_tbl();
        get_rows_deptno:=logic.get_rows_by_deptno(p_in_deptno);
 
        for indx in 1 .. get_rows_deptno.count
            loop
                pipe row (t_dept_obj(
                          get_rows_deptno(indx).empno 
                         ,get_rows_deptno(indx).ename 
                         ,get_rows_deptno(indx).hiredate 
                         ,get_rows_deptno(indx).dname 
                         ,get_rows_deptno(indx).job 
                         ,get_rows_deptno(indx).salary 
                         ,get_rows_deptno(indx).location
                         
                          ));
                
    end loop;  
    
             apex_json.initialize_clob_output();
             apex_json.open_object();
             apex_json.write('department_no : ', p_in_deptno);
             lv_payload := apex_json.get_clob_output();
             apex_json.free_output();
             log_message (lv_api_id, lv_payload);
    
     return;       
    
 end get_rows_by_deptno;
    
    



 /*
 
 select 
    json_arrayagg
    (
               'empno : ' ||    empno 
        ||' '||'ename : '||     ename
        ||' '|| 'hiredate : '|| hiredate
        ||' '||'dname : '||     dname
        ||' '||'job : '||       job
        ||' '||'salary : '||    salary
        ||' '||'location : '||  location
    )
    from (
        select empno , ename, hiredate, dname, job, salary, location 
        from emp, dept  
        where emp.deptno = dept.deptno  
            and lower(dept.dname) = 'sales'
            order by ename);

*/
END REST;
/
