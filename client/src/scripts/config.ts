export const Config = {
    regions: {
        onevone: { name: "1v1 Server", address: "104.207.143.117", https: false },
        clanwar: { name: "Clanwar Server", address: "104.207.143.117:8001", https: false },
        na: { name: "North America", address: "na.suroi.io", https: true },
        eu: { name: "Europe", address: "eu.suroi.io", https: true },
        sa: { name: "South America", address: "sa.suroi.io", https: true },
        as: { name: "Asia", address: "as.suroi.io", https: true }
    },
    defaultRegion: "na",
    mode: "normal"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, {
        readonly name: string
        readonly address: string
        readonly https: boolean
    }>
    readonly defaultRegion: string
    readonly mode: string
}
