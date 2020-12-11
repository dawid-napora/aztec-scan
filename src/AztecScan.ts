import AztecScanResult from './AztecScanResult';

export interface AztecScanOptions {
  allowInvalid: boolean;
}

/** AztecScan class */
export default class AztecScan {
  private options: AztecScanOptions = {
    allowInvalid: false,
  };

  private devices: MediaDeviceInfo[] = [];

  /**
   * Create AztecScan instance
   * @param {AztecScanOptions} options - Options for AztecScan instance
   */
  constructor(options?: AztecScanOptions) {
    if (options) this.options = options;
  }

  /**
   * Request devices list from browser's MediaDevices API
   * @returns {Promise<MediaDeviceInfo[]>} devices list
   */
  public enumerateDevices(): Promise<MediaDeviceInfo[]> {
    return new Promise((resolve, reject) => {
      if (
        'mediaDevices' in navigator &&
        'enumerateDevices' in navigator.mediaDevices
      ) {
        navigator.mediaDevices
          .enumerateDevices()
          .then((devices) => {
            this.devices = devices;
            resolve(this.devices);
          })
          .catch((error) => reject(error));
      } else {
        reject(new Error('Unsupported'));
      }
    });
  }

  /**
   * Get devices listed by enumerateDevices() method
   * @returns {MediaDeviceInfo[]} devices list
   */
  public get devicesList(): MediaDeviceInfo[] {
    return this.devices;
  }

  /**
   * @todo Scan from image element
   * @since Future function
   */
  public fromImage(): Promise<AztecScanResult> {
    return new Promise((resolve) => {
      // TODO: Scan from image
      resolve(new AztecScanResult());
    });
  }

  /**
   * @todo Scan from canvas element
   * @since Future function
   */
  public fromCanvas(): Promise<AztecScanResult> {
    return new Promise((resolve) => {
      // TODO: Scan from canvas
      resolve(new AztecScanResult());
    });
  }

  /**
   * @todo Scan from video element
   * @since Future function
   */
  public fromVideo(): Promise<AztecScanResult> {
    return new Promise((resolve) => {
      // TODO: Scan from video
      resolve(new AztecScanResult());
    });
  }
}
