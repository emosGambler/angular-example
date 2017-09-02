import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from './../comment/shared/comment.model';
import { restrictedWords } from './../shared/restricted-words.validator';

@Component({
    selector: 'new-session',
    templateUrl: './new-session.component.html',
    styles: [`
        .error input, .error select, .error textarea {
            background-color: #cc0000;
        }
        em {
            color: red;
        }
    `]
})
export class NewSessionComponent implements OnInit {
    @Output() cancelAddSession = new EventEmitter();
    @Output() saveNewSession = new EventEmitter();
    public newSessionForm: FormGroup;
    public abstract: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public name: FormControl;
    public presenter: FormControl;

    ngOnInit() {
        this.abstract = new FormControl('', [Validators.required,
            Validators.maxLength(400),
            restrictedWords(['spam', 'ass'])]);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);

        this.newSessionForm = new FormGroup({
            abstract: this.abstract,
            duration: this.duration,
            level: this.level,
            name: this.name,
            presenter: this.presenter
        })
    }

    cancel() {
        this.cancelAddSession.emit();
    }
    saveSession(formValues) {
        let session: ISession = {
            abstract: formValues.abstract,
            duration: +formValues.duration,
            id: undefined,
            level: formValues.level,
            name: formValues.name,
            presenter: formValues.presenter,
            voters: []
        }
        this.saveNewSession.emit(session);
    }
}