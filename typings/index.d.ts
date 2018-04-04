// declare type ID = number
declare type CITAInterval = number
// declare type BlockNumber = string
declare type ServerAddr = string
declare type BlockHash = string
declare type ReservedRecords = number

declare type JSONRPCResult = string | object
declare type ID = number

interface JSONRPCError {
  code: string
  message: string
}

declare interface JSONRPCResponse {
  jsonrpc: string
  result?: JSONRPCResult
  error?: JSONRPCError
  id: ID
}
