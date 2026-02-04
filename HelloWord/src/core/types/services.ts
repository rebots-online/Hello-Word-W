export interface IStorageService {
  initialize(): Promise<void>;
  executeQuery(sql: string, params?: any[]): Promise<any>;
  transaction(callback: (tx: any) => Promise<void>): Promise<void>;
}

export interface IAudioRecorder {
  record(): Promise<void>;
  stop(): Promise<string>; // Returns filePath
  play(filePath: string): Promise<void>;
}

export interface IDeviceInfo {
  getPlatform(): 'ios' | 'android' | 'web';
  isFoldable(): boolean;
}
