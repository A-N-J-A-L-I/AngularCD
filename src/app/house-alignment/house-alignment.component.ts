import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';



@Component({
  selector: 'app-house-alignment',
  templateUrl: './house-alignment.component.html',
  styleUrls: ['./house-alignment.component.scss']
})
export class HouseAlignmentComponent implements OnInit, OnChanges {


  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  @Input() alignment: number = 0;


  @Input() roofType;
  public tickPlacement: string = 'none';
  image: SafeHtml;

  types = [];
  @Input() alignmentStep;
  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.types = [
      {
        key: 'gable',
        // iconSvg: this.sanitizer.bypassSecurityTrustHtml('<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg"  height="512" viewBox="0 0 145.782 120.75">' +
        //   '<path id="box_gable" data-name="box gable" d="M314.386,158.541l7.541,4.354v31.963a2,2,0,0,0,1,1.732l41.568,24a1.99,1.99,0,0,0,2,0l83.137-48a2,2,0,0,0,1-1.732v-22.1l7.541-4.354a2,2,0,0,0,.62-2.9l-29.325-40.564a2.026,2.026,0,0,0-2.067-.777c-31.315,7.156-29.487,6.692-29.88,6.919l-83.14,48A2.007,2.007,0,0,0,314.386,158.541Zm11.541,6.664L363.5,186.9v28.5L325.927,193.7Zm89.421-58.188-71.375,41.208L327.888,151.9l71.376-41.208Zm-71.481,45.335,23.069,31.91L320.8,157.624ZM367.5,215.394V189.2l5.542,3.2a2.03,2.03,0,0,0,2,0l71.6-41.337V169.7Zm7.105-27.357-26.97-37.305,79.656-45.989,26.97,37.305Z" transform="translate(-313.394 -100.11)"/>' +
        //   '</svg>')
        iconSvg: this.sanitizer.bypassSecurityTrustHtml('<img src="./assets/roof-type-top-view/gal.png">')
      },
      {
        key: 'pyramid',
        // iconSvg: this.sanitizer.bypassSecurityTrustHtml('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"  height="512" viewBox="0 0 145.788 114.085">' +
        //   '<path id="pyramid_hip" data-name="pyramid hip" d="M458.174,804.1l-58.65-33.864a2,2,0,0,0-2,0c-89.073,51.427-83.356,48.013-83.752,48.56a2.135,2.135,0,0,0-.382,1.057,2,2,0,0,0,.226,1.037c.36.693.2.48,8.311,5.164v31.963a2,2,0,0,0,1,1.732l41.569,24a1.98,1.98,0,0,0,1,.268c.854,0-4.837,3.1,84.139-48.268a2,2,0,0,0,1-1.732v-22.1l7.541-4.354A2,2,0,0,0,458.174,804.1ZM325.927,828.364l37.569,21.69v28.5l-37.569-21.69Zm118.554-27.553L389.63,788l9.473-13.384Zm-59.509-13.157-38.477,16.663,45.122-26.051Zm-1.359,4.948L372.6,850.69l-52.769-30.466ZM367.5,878.553v-26.19c5.637,3.255,5.641,3.282,5.981,3.381a1.858,1.858,0,0,0,1.033.025c.453-.111-3.354,2.035,72.125-41.543v18.637Zm9.319-28.636,11.042-58.228L451.8,806.627Z" transform="translate(-313.387 -769.968)"/>' +
        //   '</svg>')
        iconSvg: this.sanitizer.bypassSecurityTrustHtml('<img src="./assets/roof-type-top-view/pyramid.png">')

      },
      {
        key: 'hip',
        // iconSvg: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg"  height="512" viewBox="0 0 145.779 114.084">' +
        //   '<path id="hip" d="M535.377,157.936c.383.553-.029.227,8.168,4.959v31.963a2,2,0,0,0,1,1.732l41.57,24a2,2,0,0,0,2,0l83.137-48a2,2,0,0,0,1-1.732v-22.1l7.541-4.354a2,2,0,0,0,.274-3.274c-43.72-36.087-41.185-34.222-42.142-34.279-.328-.02-18.427-.041-17.783-.041-.833,0,4.87-3.121-84.138,48.268A1.985,1.985,0,0,0,535.377,157.936Zm12.168,7.269,37.57,21.69v28.5L547.545,193.7Zm30.508-20.059,14,41.134-50.2-28.985Zm11.062,44.059c5.866,3.387,5.848,3.467,6.541,3.467.8,0-3.853,2.534,72.6-41.6V169.7l-79.137,45.691Zm7.65-1.483-15.037-44.2,55.876-32.26L675.3,142.381Zm33.6-76.894-51.886,29.956-23.2,7.785,65.4-37.758Z" transform="translate(-535.014 -106.773)"/>' +
        //   '</svg>')
        iconSvg: this.sanitizer.bypassSecurityTrustHtml('<img src="./assets/roof-type-top-view/hip.png">')
      },
      {
        key: 'flat',
        iconSvg: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg"  height="512" viewBox="0 0 144.705 120.618">' +
          '<path id="flat" d="M759.476,156.59l7,4.041v34.227a2,2,0,0,0,1,1.732l41.569,24a2,2,0,0,0,2,0l83.138-48a2,2,0,0,0,1-1.732V136.631l7-4.041a2,2,0,0,0,0-3.464l-49.569-28.619a2,2,0,0,0-2,0l-91.138,52.619A2,2,0,0,0,759.476,156.59Zm92.138-52.041,45.569,26.309-87.138,50.309-45.569-26.309Zm-81.138,58.392,37.569,21.69v30.763L770.476,193.7Zm41.569,21.69,79.138-45.69V169.7l-79.138,45.691Z" transform="translate(-758.477 -100.239)"/>' +
          '</svg>')
      },
      {
        key: 'shed',
        // iconSvg: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg"  height="512" viewBox="0 0 144.145 126.216">' +
        //   '<path id="shed" d="M406.163,536.528a2,2,0,0,0-2.376-.282l-83.138,48a2,2,0,0,0-.376,3.183l6.272,5.945V636.2a2,2,0,0,0,1,1.732l41.569,24a2,2,0,0,0,2,0l83.139-48a2,2,0,0,0,1-1.732v-14.1l7.541-4.353a2,2,0,0,0,.376-3.184Zm-75.618,60.637,37.569,35.609v23.957L330.545,635.04Zm41.569,59.566V636.565l5.165,4.9a2,2,0,0,0,2.376.282l71.6-41.337V611.04Zm6.834-19.2L324.97,586.37l79.525-45.912,53.978,51.16Z" transform="translate(-319.649 -535.979)"/>' +
        //   '</svg>')
        iconSvg: this.sanitizer.bypassSecurityTrustHtml('<img src="./assets/roof-type-top-view/shed.png">')
      }
    ]
    ;

    this.types.forEach(item => {
      if (this.roofType === item.key) {
        this.image = item.iconSvg;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.types.forEach(item => {
      if (changes.roofType.currentValue === item.key) {
        this.image = item.iconSvg;
        this.alignment = 0;
      }
    });
  }

  changeRotation(event) {
    this.alignment = event.value;
  }

  public submitForm(): void {
    this.onSubmit.emit({
      alignment: this.alignment
    });
  }
}
