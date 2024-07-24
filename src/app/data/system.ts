export interface Column {
    CATEGORY: string;
    SUB_CATEGORY: string;
    CD: string;
    VALUE: string;
    REMARK: string | null;
    STATUS: string;
    CREATE_BY: string;
    CREATE_DT: string;
    UPDATE_BY: string;
    UPDATE_DT: string;
}

export const MasterData: Column[] = [
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATINVTYPE",
        CD: "I",
        VALUE: "INVENTORY",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATINVTYPE",
        CD: "N",
        VALUE: "NON INVENTORY",
        REMARK: "2",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATINVTYPERFISM",
        CD: "1",
        VALUE: "I",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATINVTYPERFISM",
        CD: "2",
        VALUE: "N",
        REMARK: "2",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATPLANTARIBA",
        CD: "C",
        VALUE: "TMT(GW2)",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATPLANTARIBA",
        CD: "G",
        VALUE: "TMT(GW1)",
        REMARK: "2",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATPLANTARIBA",
        CD: "P",
        VALUE: "TMT(BP)",
        REMARK: "3",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATPLANTARIBA",
        CD: "S",
        VALUE: "TMT(SR)",
        REMARK: "4",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATPLANTARIBA",
        CD: "ALL",
        VALUE: "TMT",
        REMARK: "5",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATPLANTARIBA",
        CD: "W",
        VALUE: "TAW",
        REMARK: "6",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATSTATUS",
        CD: "Y",
        VALUE: "ACTIVE",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATSTATUS",
        CD: "N",
        VALUE: "INACTIVE",
        REMARK: "2",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATSTORETYPE",
        CD: "W",
        VALUE: "GENERAL WAREHOUSE",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATSTORETYPE",
        CD: "L",
        VALUE: "STOCK LINE SITE",
        REMARK: "2",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATSTORETYPE",
        CD: "S",
        VALUE: "SUB-WAREHOUSE",
        REMARK: "3",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATSTORETYPE",
        CD: "B",
        VALUE: "GENERAL WAREHOUSE AND SUB-WAREHOUSE",
        REMARK: "4",
        STATUS: "N",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "niramanc",
        UPDATE_DT: "2024-03-05T15:52:15"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATTYPSTKTCKRPT",
        CD: "1",
        VALUE: "DIRECT",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATTYPSTKTCKRPT",
        CD: "2",
        VALUE: "IN-DIRECT",
        REMARK: "2",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATTYPSTKTCKRPT",
        CD: "3",
        VALUE: "SPARE PARTS",
        REMARK: "3",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "LIST_OF_VALUE",
        SUB_CATEGORY: "MATTYPE",
        CD: "1",
        VALUE: "DIRECT",
        REMARK: "1",
        STATUS: "Y",
        CREATE_BY: "MIGRATION",
        CREATE_DT: "2024-02-04T17:07:58",
        UPDATE_BY: "MIGRATION",
        UPDATE_DT: "2024-02-04T17:07:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000013",
        VALUE: "WBH011B11",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000014",
        VALUE: "WBH011C11",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000015",
        VALUE: "WBH031111",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000016",
        VALUE: "WBH031611",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000017",
        VALUE: "WBH031711",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000018",
        VALUE: "WBH031811",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    },
    {
        CATEGORY: "ACL_MENU",
        SUB_CATEGORY: "MATS123",
        CD: "MATS123_0000019",
        VALUE: "WBH011D11",
        REMARK: null,
        STATUS: "Y",
        CREATE_BY: "SYSTEM",
        CREATE_DT: "2024-03-22T14:47:58",
        UPDATE_BY: "SYSTEM",
        UPDATE_DT: "2024-03-22T14:47:58"
    }
];




