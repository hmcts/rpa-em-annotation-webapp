export default {
    services: {
        idam_web: 'https://idam.preprod.ccidam.reform.hmcts.net',
        idam_api: 'https://preprod-idamapi.reform.hmcts.net:3511',
        s2s:
            'https://rpe-service-auth-provider-aat.service.core-compute-aat.internal',
        dm_store_api: 'https://dm-store-aat.service.core-compute-aat.internal',
        em_anno_api: 'https://em-anno-aat.service.core-compute-aat.internal',
        em_npa_api: 'https://em-npa-aat.service.core-compute-aat.internal'
    },
    useProxy: false,
    secureCookie: false,
    sessionSecret: 'secretSauce'
};