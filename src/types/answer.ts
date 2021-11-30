export const AKUMA_HTTP = 'Action protocol with HTTP'
export const AKUMA_GRPC = 'Action protocol with gRPC'
export const AKUMA_MONGODB = 'Mongo DB'
export const AKUMA_REDIS = 'Redis'

export interface Answer {
  protocol: Array<string>
  database: Array<string>
}