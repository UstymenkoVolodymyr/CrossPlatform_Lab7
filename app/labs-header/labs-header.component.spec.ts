import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LabsHeaderComponent } from './labs-header.component';
describe('LabsHeaderComponent', () => {
  let component: LabsHeaderComponent;
  let fixture: ComponentFixture<LabsHeaderComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), LabsHeaderComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LabsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
