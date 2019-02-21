import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';

import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.Survey.cssType = 'bootstrap';
Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  selector: 'app-exitsurveys',
  templateUrl: './exitsurveys.component.html',
  styleUrls: ['./exitsurveys.component.css']
})
export class ExitsurveysComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  @Input()
  json: object;

  surveyJson: any = {
    pages: [
      {
        name: 'exitsurvey',
        elements: [
          {
            name: 'generalInfo',
            title: 'General Information',
            type: 'multipletext',
            colCount: 3,
            isRequired: true,
            items: [
              {
                name: 'name',
                title: 'Name'
              },
              {
                name: 'ID',
                title: 'Student ID'
              },
              {
                name: 'date',
                title: 'Date',
                inputType: 'date'
              }
            ]
          },
          {
            name: 'degreeProgram',
            title: 'Select one of your Computer Science degree program',
            type: 'radiogroup',
            colCount: 4,
            choices: ['B.A.', 'B.S.', 'M.S.', 'Ph.D.'],
            isRequired: true
          },
          {
            name: 'expectedGraduation',
            title: 'Term of the Expected Graduation',
            type: 'text',
            placeHolder: 'Spring 2019',
            isRequired: true
          },
          {
            name: 'Personal Contact Information',
            type: 'multipletext',
            colCount: 2,
            isRequired: true,
            items: [
              {
                name: 'Name'
              },
              {
                name: 'Address'
              },
              {
                name: 'Home Phone'
              },
              {
                name: 'Work Phone'
              },
              {
                name: 'Cell Phone'
              },
              {
                name: 'Email'
              },
            ]
          },
          {
            name: 'Other Contact Information',
            type: 'multipletext',
            colCount: 2,
            isRequired: true,
            items: [
              {
                name: 'Name'
              },
              {
                name: 'Address'
              },
              {
                name: 'Home Phone'
              },
              {
                name: 'Work Phone'
              },
              {
                name: 'Cell Phone'
              },
              {
                name: 'Email'
              },
              {
                name: 'Relationship',
                placeHolder: 'Parent/Sibling/Other Relative/ Friend'
              },
            ]
          },
          {
            name: 'Student Assessment of the Program',
            // tslint:disable-next-line:max-line-length
            title: 'Please rate your expectations about the CS program (EX = Exceeds; MT = Meets; ' +
               'MA = Marginally Acceptable; UN = Unacceptable)',
            type: 'matrix',
            isRequired: true,
            columns: [
              {
               value: 'col1',
               text: 'EX'
              },
              {
               value: 'col2',
               text: 'MT'
              },
              {
               value: 'col3',
               text: 'MA'
              },
              {
               value: 'col4',
               text: 'UN'
              }
             ],
             rows: [
              {
               value: 'row1',
               text: 'The advisment quality in the department'
              },
              {
               value: 'row2',
               text: 'The program prepared me for my career'
              },
              {
               value: 'row3',
               text: 'The quality of the education I have received in the department'
              }
            ]
          },
          {
            name: 'Recommendation',
            title: 'Please write any recommendation you have to improve the CS program',
            type: 'text'
          },
          {
            name: 'Graduate School',
            title: 'If you have decided to pursue a graduate or professional degree, please provide the following information:',
            type: 'multipletext',
            colCount: 2,
            isRequired: true,
            items: [
              {
                name: 'School'
              },
              {
                name: 'Major'
              },
              {
                name: 'Scholarship/Assistantship'
              }
            ]
          },
          {
            name: 'job search',
            title: 'If you have started searching for employment, please provide the following information',
            type: 'multipletext',
            items: [
              {
                name: 'Number of months searching:'
              },
              {
                name: 'Number of interviews you had:'
              },
              {
                name: 'Number of job offers obtained:'
              },
              {
                name: 'Average starting salary offered:'
              }
            ]
          },
          {
            name: 'accepted offer',
            title: 'If you have already accepted an offer, please provide the following information if possible',
            type: 'multipletext',
            items: [
              {
                name: 'Company:'
              },
              {
                name: 'City:'
              },
              {
                name: 'Position/Title:'
              },
              {
                name: 'Your Company contact information (if available):'
              },
              {
                name: 'Web address:'
              },
              {
                name: 'Starting salary:'
              }
            ]
          },
          {
            name: 'Job Networking',
            type: 'matrix',
            isRequired: true,
            columns: [
              {
               value: 'col1',
               text: 'YES'
              },
              {
               value: 'col2',
               text: 'NO'
              }
             ],
             rows: [
              {
               value: 'row1',
               text: 'May we refer future students to you for questions regarding the CS field as a career?'
              },
              {
               value: 'row2',
               text: 'Can these students use you as a contact for possible job prospects?'
              }
            ]
          },
        ]
      }]
  };


  constructor() { }

  ngOnInit() {
    const surveyModel = new Survey.Model(this.surveyJson);
    surveyModel.onComplete.add(this.sendDataToServer);
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }

  sendDataToServer(surveyModel) {
    console.log(JSON.stringify(surveyModel.data));
  }

}
