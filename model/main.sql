-------OOZE Project data model---------------


create table upgraded_dump (
    load_id             number generated always as identity,
    created             date default sysdate,
    consultant_company  varchar2(100 ),
    project_heading     varchar2(4000 ),
    project_details     clob,
    project_contact     varchar2(4000 ),
    project_url         varchar2(1000 )
); 



create table upgraded_projects (
project_id                    number generated always as identity,
created                       date default sysdate,
consultant_company            varchar2(100),
project_heading               varchar2(4000),
project_details               clob,
project_contact               varchar2(4000),
project_url                   varchar2(1000),
project_start_date            varchar2(200),
project_end_date              varchar2(200),
project_availablity           varchar2(500),
project_location              varchar2(2000),
application_close_date        varchar2(200),
dump_load_id                  number, 
company_website               varchar2(200),
company_initial               varchar2(10)  
);


create table recevie_application
 ( 
   resume_id                            number generated always as identity,
   created                              date default sysdate,
   first_name                           varchar2(1000),
   last_name                            varchar2(1000),
   project_name                         varchar2(4000),
   project_supplier                     varchar2(1000),
   contact_number                       number,
   email_address                        varchar2(1000),
   linkedin_profile                     varchar(1000),
   resume                               blob,
   motivation_letter                    blob,
   project_id                           number
);




create table email_subscription (
     email_subscription_id       number generated always as identity
    ,created                       date default sysdate
    ,name                varchar2(1000)
    ,email_address       varchar2(1000)
    ,email_subscription_status varchar2(1)
);



create table oozeab_contact (
name varchar2(1000),
email varchar2(1000),
website varchar2(1000),
comments varchar2(4000),
contact_id number generated always as identity,
created date default sysdate
);




create table url_dump(
    url                 varchar2(4000),
    load_id             number generated always as identity,
    created             date default sysdate);




create table keyman_dump(
    consultant_company   varchar2(4000),
    project_details     clob,
    project_url         varchar2(4000),
    load_id              number generated always as identity,
    created              date default sysdate);




create table keyman_projects (
    project_id  number generated always as identity,
        created                  date default sysdate,
        consultant_company       varchar2(100 ),
        project_heading          varchar2(4000),
        project_contact          varchar2(4000),
        project_url              varchar2(1000),
        project_start_date       varchar2(200),
        project_end_date         varchar2(200),
        project_location         varchar2(2000),
        keyman_dump_load_id      number,
        application_close_date   varchar2(300) ,
        project_details          clob,
        project_availablity      varchar2(500),
		company_website          varchar2(200),
        company_initial          varchar2(10)  
);
---------------------------------------
