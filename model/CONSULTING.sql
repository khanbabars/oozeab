CREATE OR REPLACE PACKAGE CONSULTING AS 

  /* TODO enter package declarations (types, exceptions, methods etc) here */ 
  
  
  procedure parse_upgraded;
  
  

END CONSULTING;
/


CREATE OR REPLACE PACKAGE BODY CONSULTING AS
procedure parse_upgraded
is
  ------------------------------------------------------------------------------
  --  function:    parse_upgraded
  --  created by:  Shazib Saleem Warraich, 2021-11-18
  --  desc:        procedure will be used to prepare 
  --               clean data for upgraded projects  
  ------------------------------------------------------------------------------
  lv_load_id number;
  lv_consultant_company varchar2(100):= 'UPGRADED';
  lv_location varchar2(400);
  lv_project_details varchar2(4000);
  lv_project_original_url  varchar2(4000);
  lv_project_heading varchar(4000);
  lv_project_url varchar2(4000);
  lv_project_contact varchar2(4000);
 
  begin     
      execute immediate 'truncate table upgraded_projects';
       
       for i in (select * from upgraded_parsed_view where to_date(applying_last_date) >= sysdate) loop
              insert into upgraded_projects(
                                        consultant_company
                                        ,project_start_date
                                        ,project_end_date
                                        ,project_availablity
                                        ,project_location
                                        ,application_close_date
                                        ,dump_load_id
                                        )
                                        values
                                        (
                                           lv_consultant_company
                                          ,i.startdate
                                          ,i.stopdate
                                          ,i.availiblity
                                          ,i.location
                                          ,i.applying_last_date
                                          ,i.load_id)
                                          returning i.load_id into lv_load_id;
                                          
       ----------------------------------------------------------
       --project details, startdate, enddate etc
       ----------------------------------------------------------                                         
             select regexp_replace(replace(str, '?', '' ) ,'\s+('||CHR(32)||'|$)', '\1') 
                into  lv_project_details 
                    from (
                select cast(regexp_replace(str, '(Role & tasks|Assignment description|Uppdragsbeskrivning|About the assignment|Background|What do we offer|Job description|Bakgrund|Project description and skills needed|Beskrivning av uppdraget)', ' ')as varchar(4000)) str 
                  from (
                    select regexp_replace( project_details,  '(Om uppdraget|Startdatum|Om).+\', '   ') str   
                    from upgraded_dump     
                 where load_id = lv_load_id));           
                 
                 update upgraded_projects
                     set project_details = lv_project_details
                     where dump_load_id = lv_load_id;
       ----------------------------------------------------------
       --project heading
       ----------------------------------------------------------
               select replace(replace(regexp_replace(project_heading,'ref.+\', '   '),'(', ' ' ),')','') str 
                    into lv_project_heading 
                from  upgraded_dump 
                where  load_id = lv_load_id;
            
                update upgraded_projects
                set project_heading = lv_project_heading
                where dump_load_id = lv_load_id;    
       ----------------------------------------------------------
       --project url
       ----------------------------------------------------------         
               select  project_url as str
                    into lv_project_url 
                from  upgraded_dump 
                where  load_id = lv_load_id;
            
                update upgraded_projects
                set project_url = lv_project_url
                where dump_load_id = lv_load_id;     
                                
       ----------------------------------------------------------
       --project contact
       ----------------------------------------------------------                 
            --    select   trim(regexp_replace(project_contact, '([0])', '  \1')) str 
             --   into lv_project_contact
             --   from upgraded_dump
             --   where load_id = lv_load_id;  
             
             select
                --load_id,
                --contact_number,
                --full_name,
                --email,
                --first_name,
                regexp_replace( full_name,  first_name||'.+\')
                               ||' '||regexp_substr( full_name,  first_name
                               ||'.+\')||' '||contact_number project_contact  --,
                --regexp_substr( full_name,  first_name||'.+\') email
                into lv_project_contact
                from (
                select 
                    load_id,
                    regexp_replace(str,  '[^0-9]') contact_number,
                    regexp_replace(replace(trim(regexp_replace(str, '[0-9]+')),'-', ' '),  '^\s*', null, 1, 0, 'm') full_name,
                    regexp_replace(replace(trim(regexp_replace(str, '[0-9]+')),'-', ' '),  '^\s*', null, 1, 0, 'm') email,
                    lower(regexp_substr( regexp_replace(replace(trim(regexp_replace(str, '[0-9]+')),'-', ' '),  '^\s*', null, 1, 0, 'm'), '[A-z]*'))   first_name     
               from (
                     select  load_id,
                      regexp_replace((replace(project_contact, 'Kontaktuppgifter', '')), '([O])', '  \1') str 
                     from upgraded_dump where load_id = lv_load_id));
                        
                        update upgraded_projects
                        set project_contact = lv_project_contact
                        where dump_load_id = lv_load_id;     
                                        
                     
        end loop;
        
        
commit;

end parse_upgraded;





END CONSULTING;
/
