export const SERVICES = {
    API_GATEWAY: 'api-gateway',
    USERS_SERVICE: 'user-service',
    AUTH_SERVICE: 'auth-service',
    EVENTS_SERVICE: 'events-service',
    PAYMENTS_SERVICE: 'payments-service',
    NOTIFICATIONS_SERVICE: 'notifications-service',
    TICKETS_SERVICE: 'tickets-service',
};

export const SERVICES_PORTS = {
    [SERVICES.API_GATEWAY]: 8080,
    [SERVICES.USERS_SERVICE]: 8081,
    [SERVICES.AUTH_SERVICE]: 8082,
    [SERVICES.EVENTS_SERVICE]: 8083,
    [SERVICES.PAYMENTS_SERVICE]: 8084,
    [SERVICES.NOTIFICATIONS_SERVICE]: 8085,
    [SERVICES.TICKETS_SERVICE]: 8086,
} as const;

