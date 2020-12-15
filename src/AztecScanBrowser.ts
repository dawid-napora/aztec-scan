import { BrowserCodeReader } from '@zxing/browser';
import AztecScanReader from './AztecScanReader';

export default class AztecScanBrowser extends BrowserCodeReader {
  public constructor() {
    super(new AztecScanReader());
  }
}
