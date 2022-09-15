import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges{

    starDivWidth?: number;

    
    /* 
        this line with @Input creates an attribute directive; this is a way for us to
        send information from parent to child
        (note: @Input's data binding happens during the changes lifecycle step)
    */
    @Input()
    rank: number = 2.5;


    /* 
        this line with @Output creats an attribute directive; this is a way for us to send information
        from child to parent
        (note: we're essentially creating our own custom event)
    */
    @Output()
    starClicked: EventEmitter<string> = new EventEmitter<string>();


    constructor(){
        /* 
            The constructor is no longer a great place to create initialization logic. We have
            a lifecycle method to do that now.

            The constructor will be better used to acquire services.
        */
        // this.starDivWidth = this.rank * 70/5;
    }

    ngOnChanges(changes: SimpleChanges): void {
        /*
            THIS lifecycle hook will be better for taking in dynamic information from parents
        */
        this.starDivWidth = this.rank * 70/5;
    }

    ngOnInit(): void {
        
        /* THIS is a better place for initialization logic than a constructor.
        This allows Angulat to trigger this method multiple times during DOM manipulation
        
        Called once, after the first ngOnChanges(). ngOnInit() is still called even when
        ngOnChanges() is not (which is the case when there are no template-bound inputs).
        */
    }

    onStarClickedFunction(){
        console.log("star clicked");
        this.starClicked.emit(`This rank is ${this.rank}. (from inside the star component)`);

    }
}