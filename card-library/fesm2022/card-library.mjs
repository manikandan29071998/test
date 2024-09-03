import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CardLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CardLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardLibraryComponent, selector: "lib-card-library", ngImport: i0, template: `
    /* From Uiverse.io by Pradeepsaranbishnoi */ 
<input id="switch" type="checkbox">
<div class="app">
  <div class="body">
    
    <div class="phone">
    
      <div class="menu">
        <div class="time">4:20</div>
        <div class="icons">
          <div class="network"></div>
          <div class="battery"></div>
        </div>
      </div>
    
      <div class="content">
        <div class="circle">
          <div class="crescent"></div>
        </div>
       
        <label for="switch">
          <div class="toggle"></div>
          <div class="names">
            <p class="light">Light</p>
            <p class="dark">Dark</p>
          </div>
        </label>
        
       
      </div>
      
    </div>
  </div>
  
</div>
  `, isInline: true, styles: [".credit{position:fixed;right:2rem;bottom:2rem;color:#fff}.credit a{color:inherit}.main-circle{width:40rem;height:40rem;border-radius:100%;background:linear-gradient(40deg,#ff0080,#ff8c00 70%);position:absolute;z-index:1;left:50%;transform:translate(-50%,-70%)}.phone{position:relative;z-index:2;width:18rem;height:17rem;background-color:inherit;box-shadow:0 4px 35px #0000001a;border-radius:40px;display:flex;flex-direction:column}.icons{display:flex;margin-top:.5rem}.battery{width:.85rem;height:.45rem;background-color:#000}.network{width:0;height:0;border-style:solid;border-width:0 6.8px 7.2px 6.8px;border-color:transparent transparent black transparent;transform:rotate(135deg);margin:.12rem .5rem}.content{display:flex;flex-direction:column;margin:auto;text-align:center;width:70%;transform:translateY(5%)}.circle{position:relative;border-radius:100%;width:8rem;height:8rem;background:linear-gradient(40deg,#ff0080,#ff8c00 70%);margin:auto}.crescent{position:absolute;border-radius:100%;right:0;width:6rem;height:6rem;background:#fff;transform:scale(0);transform-origin:top right;transition:transform .6s cubic-bezier(.645,.045,.355,1)}label,.toggle{height:2.8rem;border-radius:100px}label{width:100%;background-color:#0000001a;border-radius:100px;position:relative;margin:1.8rem 0 4rem;cursor:pointer}.toggle{position:absolute;width:50%;background-color:#fff;box-shadow:0 2px 15px #00000026;transition:transform .3s cubic-bezier(.25,.46,.45,.94)}.names{font-size:90%;font-weight:bolder;color:#000;width:65%;margin-left:17.5%;margin-top:6.5%;position:absolute;display:flex;justify-content:space-between;-webkit-user-select:none;user-select:none}.dark{opacity:.5}.mark{border-radius:100px;background-color:#000}.time{color:#000}[type=checkbox]{display:none}[type=checkbox]:checked+.app .toggle{transform:translate(100%);background-color:#34323d}[type=checkbox]:checked+.app .dark{opacity:1;color:#fff}[type=checkbox]:checked+.app .light{opacity:1;color:#fff}[type=checkbox]:checked+.app .body{background-color:#26242e;color:#fff}[type=checkbox]:checked+.app .crescent{transform:scale(1);background:#26242e}[type=checkbox]:checked+.app .circle{background:linear-gradient(40deg,#8983f7,#a3dafb 70%)}[type=checkbox]:checked+.app .main-circle{background:linear-gradient(40deg,#8983f7,#a3dafb 70%)}[type=checkbox]:checked+.time{color:#fff}[type=checkbox]:checked+.app .body .phone .menu .time{color:#fff}[type=checkbox]:checked+.app .body .phone .menu .icons .network{border-color:transparent transparent white transparent}[type=checkbox]:checked+.app .body .phone .menu .icons .battery{background-color:#fff}[type=checkbox]:checked+.app .body{border-radius:40px}.menu{font-size:80%;opacity:.4;padding:.8rem 1.8rem;display:flex;justify-content:space-between;align-items:center}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-card-library', template: `
    /* From Uiverse.io by Pradeepsaranbishnoi */ 
<input id="switch" type="checkbox">
<div class="app">
  <div class="body">
    
    <div class="phone">
    
      <div class="menu">
        <div class="time">4:20</div>
        <div class="icons">
          <div class="network"></div>
          <div class="battery"></div>
        </div>
      </div>
    
      <div class="content">
        <div class="circle">
          <div class="crescent"></div>
        </div>
       
        <label for="switch">
          <div class="toggle"></div>
          <div class="names">
            <p class="light">Light</p>
            <p class="dark">Dark</p>
          </div>
        </label>
        
       
      </div>
      
    </div>
  </div>
  
</div>
  `, styles: [".credit{position:fixed;right:2rem;bottom:2rem;color:#fff}.credit a{color:inherit}.main-circle{width:40rem;height:40rem;border-radius:100%;background:linear-gradient(40deg,#ff0080,#ff8c00 70%);position:absolute;z-index:1;left:50%;transform:translate(-50%,-70%)}.phone{position:relative;z-index:2;width:18rem;height:17rem;background-color:inherit;box-shadow:0 4px 35px #0000001a;border-radius:40px;display:flex;flex-direction:column}.icons{display:flex;margin-top:.5rem}.battery{width:.85rem;height:.45rem;background-color:#000}.network{width:0;height:0;border-style:solid;border-width:0 6.8px 7.2px 6.8px;border-color:transparent transparent black transparent;transform:rotate(135deg);margin:.12rem .5rem}.content{display:flex;flex-direction:column;margin:auto;text-align:center;width:70%;transform:translateY(5%)}.circle{position:relative;border-radius:100%;width:8rem;height:8rem;background:linear-gradient(40deg,#ff0080,#ff8c00 70%);margin:auto}.crescent{position:absolute;border-radius:100%;right:0;width:6rem;height:6rem;background:#fff;transform:scale(0);transform-origin:top right;transition:transform .6s cubic-bezier(.645,.045,.355,1)}label,.toggle{height:2.8rem;border-radius:100px}label{width:100%;background-color:#0000001a;border-radius:100px;position:relative;margin:1.8rem 0 4rem;cursor:pointer}.toggle{position:absolute;width:50%;background-color:#fff;box-shadow:0 2px 15px #00000026;transition:transform .3s cubic-bezier(.25,.46,.45,.94)}.names{font-size:90%;font-weight:bolder;color:#000;width:65%;margin-left:17.5%;margin-top:6.5%;position:absolute;display:flex;justify-content:space-between;-webkit-user-select:none;user-select:none}.dark{opacity:.5}.mark{border-radius:100px;background-color:#000}.time{color:#000}[type=checkbox]{display:none}[type=checkbox]:checked+.app .toggle{transform:translate(100%);background-color:#34323d}[type=checkbox]:checked+.app .dark{opacity:1;color:#fff}[type=checkbox]:checked+.app .light{opacity:1;color:#fff}[type=checkbox]:checked+.app .body{background-color:#26242e;color:#fff}[type=checkbox]:checked+.app .crescent{transform:scale(1);background:#26242e}[type=checkbox]:checked+.app .circle{background:linear-gradient(40deg,#8983f7,#a3dafb 70%)}[type=checkbox]:checked+.app .main-circle{background:linear-gradient(40deg,#8983f7,#a3dafb 70%)}[type=checkbox]:checked+.time{color:#fff}[type=checkbox]:checked+.app .body .phone .menu .time{color:#fff}[type=checkbox]:checked+.app .body .phone .menu .icons .network{border-color:transparent transparent white transparent}[type=checkbox]:checked+.app .body .phone .menu .icons .battery{background-color:#fff}[type=checkbox]:checked+.app .body{border-radius:40px}.menu{font-size:80%;opacity:.4;padding:.8rem 1.8rem;display:flex;justify-content:space-between;align-items:center}\n"] }]
        }] });

class CardLibraryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryModule, declarations: [CardLibraryComponent], exports: [CardLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CardLibraryComponent,
                    ],
                    imports: [],
                    exports: [
                        CardLibraryComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of card-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardLibraryComponent, CardLibraryModule, CardLibraryService };
//# sourceMappingURL=card-library.mjs.map
