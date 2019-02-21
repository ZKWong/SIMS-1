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
  selector: 'app-graduatesurveys',
  templateUrl: './graduatesurveys.component.html',
  styleUrls: ['./graduatesurveys.component.css']
})
export class GraduatesurveysComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  @Input()
  json: object;

  surveyJson: any = {
    pages: [
      {
        name: 'graduatesurvey',
        elements: [
          {
            name: 'objective1',
            title: 'Objective 1: To provide students with a solid foundation in Computer Science,' +
                   'Mathematics, and Basic Sciences, which will allow them to successfully pursue ' +
                   'graduate studies in Computer Science, or other related degrees.',
            type: 'radiogroup',
            colCount: 4,
            choices: ['Exceeds Expectation', 'Meet Expectations', 'Marginally Acceptable', 'Unacceptable'],
            isRequired: true
          },
          {
            name: 'objective2',
            title: 'Objective 2: To provide students with a solid foundation in Computer Science,' +
                   'Mathematics, and Basic Sciences, which will allow them to successfully compete ' +
                   'for quality jobs in all functions of Computer Science employment, ranging from ' +
                   'software developer to customer support.',
            type: 'radiogroup',
            colCount: 4,
            choices: ['Exceeds Expectation', 'Meet Expectations', 'Marginally Acceptable', 'Unacceptable'],
            isRequired: true
          },
          {
            name: 'objective3',
            title: 'Objective 3: To equip students with life-long learning skills, which will allow ' +
                   'them to successfully adapt to the evolving technologies throughout their ' +
                   'professional careers.',
            type: 'radiogroup',
            colCount: 4,
            choices: ['Exceeds Expectation', 'Meet Expectations', 'Marginally Acceptable', 'Unacceptable'],
            isRequired: true
          },
          {
            name: 'objective4',
            title: 'Objective 4: To equip students with communication skills, which will allow ' +
                   'them to collaborate efficiently with other members of a team for the development ' +
                   'of large computer and software systems.',
            type: 'radiogroup',
            colCount: 4,
            choices: ['Exceeds Expectation', 'Meet Expectations', 'Marginally Acceptable', 'Unacceptable'],
            isRequired: true
          },
          {
            name: 'objective5',
            title: 'Objective 5: To provide students with broad education neccesary to understand the ' +
                   'impact of computer technology in a global and societal context.',
            type: 'radiogroup',
            colCount: 4,
            choices: ['Exceeds Expectation', 'Meet Expectations', 'Marginally Acceptable', 'Unacceptable'],
            isRequired: true
          },
        ]
      }
    ]
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
