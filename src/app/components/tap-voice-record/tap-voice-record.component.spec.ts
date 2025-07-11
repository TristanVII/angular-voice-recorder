import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapVoiceRecordComponent } from './tap-voice-record.component';

describe('TapVoiceRecordComponent', () => {
  let component: TapVoiceRecordComponent;
  let fixture: ComponentFixture<TapVoiceRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapVoiceRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapVoiceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
