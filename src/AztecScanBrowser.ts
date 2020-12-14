import { BrowserCodeReader } from '@zxing/browser/esm/BrowserCodeReader';
import AztecScanReader from './AztecScanReader';

export default class AztecScanBrowser extends BrowserCodeReader {
  public constructor(timeBetweenScansMillis = 500) {
    super(new AztecScanReader(), timeBetweenScansMillis);
  }
}
