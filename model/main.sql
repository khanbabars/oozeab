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
project_availablity           varchar2(20),
project_location              varchar2(2000),
application_close_date        varchar2(200),
dump_load_id                  number   
);