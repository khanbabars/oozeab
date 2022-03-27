CREATE OR replace force editionable view "GENERAL"."KEYMAN_PARSED_VIEW"(
    "LOAD_ID",
    "PROJECT_DETAILS",
    "PROJECT_URL",
    "PROJECT_HEADING",
    "PROJECT_START_DATE",
    "PROJECT_END_DATE",
    "PROJECT_LOCATION",
    "PROJECT_AVAILABLITY",
    "APPLICATION_CLOSE_DATE",
    "PROJECT_CONTACT",
    "PROJECT_DESCRIPTION"
) DEFAULT COLLATION "USING_NLS_COMP" AS
    WITH tmp AS (
        SELECT
            load_id,
            project_details,
            CAST(project_page AS VARCHAR2(4000) ) str,
            project_url,
            regexp_replace(replace(CAST(project_page AS VARCHAR2(4000) ),'?',''),'\s+(' || CHR(32)
                                                                                                     || '|$)','\1') str_2,
            regexp_replace(replace(project_page,'?',''),'\s+(' || CHR(32)
                                                                       || '|$)','\1') removed_empty,
            regexp_replace(replace(TRIM(regexp_replace(project_page,'[0-9]+') ),'-',' '),'^\s*',NULL,1,0,'m') remove_space
        FROM
            keyman_dump
    )
    SELECT
        load_id,
        project_details,
        project_url,
        regexp_substr(str,'[[:alpha:]]+',1,2) project_heading,
        regexp_substr(str,'.*[[:digit:]]+',1) project_start_date,
        regexp_substr(str,'.*[[:digit:]]+',1,2) project_end_date,
        regexp_substr(str,'.*[[:alnum:]]+',1,12) project_location,
        regexp_substr(str,'.*[[:digit:]]+',1,3) project_availablity,
        regexp_substr(str,'.*[[:digit:]]+',1,4) application_close_date,
        regexp_substr(str,'.*[[:digit:]]+',1,5) project_contact,
        str   AS project_description
    FROM
        tmp;

   
   
   --------------------------------------------------------------------
   
   
   CREATE OR replace force editionable view "GENERAL"."UPGRADED_PARSED_VIEW"(
    "LOAD_ID",
    "STARTDATE",
    "STOPDATE",
    "AVAILIBLITY",
    "LOCATION",
    "APPLYING_LAST_DATE"
) DEFAULT COLLATION "USING_NLS_COMP" AS
    SELECT
        load_id,
        CAST(startdate AS VARCHAR2(4000) ) startdate,
        CAST(TRIM(regexp_replace(stopdate,'([O])','  \1') ) AS VARCHAR2(4000) ) stopdate,
        availiblity,
        location,
        applying_last_date
    FROM
        (
            SELECT
                load_id,
                regexp_substr(str,'Startdatum:(.*)&*Slutdatum',1,1,NULL,1) startdate,
                regexp_substr(str,'Slutdatum:(.*)&*Omfattning',1,1,NULL,1) stopdate,
                regexp_substr(str,'Omfattning:(.*)&*Ort',1,1,NULL,1) availiblity,
                regexp_substr(str,'Ort:(.*)&*Ansök',1,1,NULL,1) location,
                regexp_substr(str,'senast:(.*)&*Referensnummer',1,1,NULL,1) applying_last_date
            FROM
                (
                    SELECT
                        load_id,
                        regexp_substr(project_details,'(Om uppdraget|Startdatum).+\') str
                    FROM
                        upgraded_dump
                )
        );
