import { Component } from "@angular/core";
import { ISuperHero } from "src/app/models/hero";



@Component({
    selector: 'app-hero-list',
    // template: '<h1>Inline html? wtheck?</h1>',
    templateUrl: './hero-list.component.html',
    // styles: ['h1{color:red;}']
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent{
    ////////interpolation demo
    heroListTitle: string = "My Hero List Component String!!!";
    interpolationBoolean = true;
    interpolationMethod(){
        return "interpolation from a function's return value";
    }

    //////////two-way datta binding demo & filtering
    inputField= "";

    ////////////hero list state
    fullSuperHeroList?: ISuperHero[];
    imageWidth = 150;
    imageMargin = 2;
    showImage = false;


    constructor(){
        this.fullSuperHeroList=[
            {
                name: 'Frozone',
                rank: 4.5,
                ability: 'cold generation',
                organization: 'incredibles',
                image: 'http://www.cultjer.com/img/ug_photo/2014_03/sf2_lg20140331142439.jpg'
            },
            {
                name: 'Eraser',
                rank: 5,
                ability: 'power nullification',
                organization: 'pro hero',
                image: 'https://media.tenor.co/images/788cc935108fb487b6af1e152bcec6bf/raw'
            },
            {
                name: 'Static Shock',
                rank: 4,
                ability: 'electric manipulation',
                organization: 'duo',
                image: 'https://t00.deviantart.net/CsfqTmmnwQAltUe4HYS8A7gsk-s=/300x200/filters:fixed_height(100,100)' +
                    ':origin()/pre00/64ea/th/pre/f/2012/125/4/1/static_shock_by_deshockwav-d4ynm1o.png'
            },
            {
                name: 'Saitama',
                rank: 5,
                ability: 'punches',
                organization: 'the hero association',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx0maPoLAqImOmsoTnxRwBronngiLYfeOVYFSSs2UBLsjXDDT&s'
            },
            {
                name: 'Trevin Chester',
                rank: 1,
                ability: 'Ultimate Reference Stasis',
                organization: 'Revature - Principal Trainer',
                image: 'https://decider.com/wp-content/uploads/2021/03/T-Bo-Muffins.jpg?quality=90&strip=all&w=300'
            }
        ];

        // this.fullSuperHeroList = [];
    }


    toggleImage(){
        this.showImage = !this.showImage;
        console.log(this.showImage);
    }

    performFilter(filterValue: string): ISuperHero[] | undefined{
        filterValue = filterValue.toLowerCase();

        const mySupeList = this.fullSuperHeroList?.filter(
            //callback function goes here
            (superHero: ISuperHero) => {
                if(superHero.name.toLowerCase().indexOf(filterValue)!==-1)
                    return true;
                if(superHero.ability.toLowerCase().indexOf(filterValue)!==-1)
                    return true;

                return false;
            }
        );



        return mySupeList;
    }

    starEventTriggerInParent(temp: string){
        this.heroListTitle = temp;
    }
}