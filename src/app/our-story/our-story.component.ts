import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { Subscription, Observable, fromEvent } from "rxjs";

@Component({
    selector: 'our-story',
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.scss'],
    animations: [
        trigger('listAnimation', [
            state('visible', style({
                transform: 'translateX(0)',
                position: 'initial',
                opacity: 1
            })),
            state('invisible', style({
                transform: 'translateX(-900%)',
                position: 'absolute',
                opacity: 0
            })),
            transition("invisible => visible", [
                animate('2s 1s ease-out')
            ]),
            transition("visible => invisible", [
                animate('2s 1s ease-out')
            ])
        ])
    ]
})
export class OurStoryComponent {
    storyIndex: number = 0;

    @ViewChild('ourstory') top: ElementRef;

    constructor(private ref: ChangeDetectorRef) {

    }

    stories: Array<Story> = [
        {
            title: "I Like Your Shirt",
            date: "Fall 2007",
            descriptions: [
                "Every story has to have a beginning. This is ours.",
                "The time is in the Fall of 2007. Joseph and Jordan are both sophomores at Lincoln-Way East High School, and they both happen to share a class together. English, to be precise. Typically, nothing much exciting happens in English class, except for one thing: A Tadahito Iguchi White Sox shirt. Jordan and Joseph are huge fans of the Chicago White Sox, and as fate would have it, Joseph wore that shirt to class, piquing Jordan's interest. Who knew something so wonderful would come out of a simple four words.",
                "I like your shirt."
            ]
        },
        {
            title: "It's All About Timing",
            date: "2008 - 2010",
            descriptions: [
                "Afterwards, Jordan and Joseph soon discovered something extremely fickle and invisible: Timing.",
                "Jordan and Joseph liked each other. Very much, actually. It's just that the timing was always off. Like a pendulum, the momentum of who liked who swung back and forth. If Joseph wanted to date Jordan, she was unavailable, and vice-versa.",
                "While being best friends, they both thought the timing would never be in their favor to be something more..."
            ]
        },
        {
            title: "North and South",
            date: "2010 - 2014",
            descriptions: [
                "Jordan and Joseph graduated from Lincoln-Way East, and went to college. Never quite getting the timing just right",
                "Joseph to DePaul University in Chicago",
                "and Jordan to The University of Illinois in Urbana/Champaign.",
                "Joseph was immersed in a urban environment in the hustle and bustle of downtown Chicago where he met some of his soon-to-be groomsmen",
                "while Jordan would be in southern Illinois where she became friends with several of her soon-to-be bridesmaids (and squirrels).",
                "Sure, college life and distance separated them greatly, and they would talk every once in a while. When Jordan and Joseph talked, however, it's as if not a single moment has passed.",
                "Once Joseph graduated from DePaul, he decided to meet Jordan for lunch back in their hometown..."
            ]
        },
        {
            title: "I Like Your Wit",
            date: "February 2015",
            descriptions: [
                "Jordan and Joseph decided to meet at Chili's in their hometown for a quick get-together to catch up. Neither Jordan nor Joseph thought it meant anything more than just two friends having lunch.",
                "They touched on many subjects, ranging from how college was, to work, Isaac Asimov's 'Three Laws of Robotics' (you know, typical conversation).",
                "The get-together was only supposed to take between thirty minutes to an hour.",
                "It lasted six hours."
            ]
        },
        {
            title: "No Longer a Pendulum",
            date: "April 12th, 2015",
            descriptions: [
                "After the six hour lunch, Jordan and Joseph started to see more of each other. From going to see a movie, out to the bars, or staying up until three in the morning talking to each other, Jordan and Joseph did more of it.",
                "Joseph began thinking that maybe, just maybe the timing was just right. And so, on April 12th, 2015, Joseph visited Jordan at the University of Illinois with flowers and Reeses, and asked Jordan to be his girlfriend.",
                "Jordan said yes."
            ]
        },
        {
            title: "1200 Miles",
            date: "2015 - 2016",
            descriptions: [
                "Jordan aspired to work at Disney, and she finally got her chance to apply her Graphic Design talents at Disney Springs.",
                "That meant she would have to live in Florida between six months to a year. Jordan and Joseph were still determined to make things work.",
                "Between numerous Skype dates, Jordan surprising Joseph for Christmas by coming home to see A Christmas Carol, care packages, and many Southwest Frequent Flyer Miles, Jordan and Joseph did the best they can to turn 1200 miles into the smallest distance possible.",
                "During this time, Joseph went to Disney for the first time (in forever). Jordan was Joseph's personal tour guide.",
                "Distance only made their relationship stronger."
            ]
        },
        {
            title: "I'd Like Your Blessing",
            date: "Summer 2017",
            descriptions: [
                "Life for Jordan and Joseph was good. Once Jordan was back from Disney, they moved in together and started to create something they both can call home",
                "Jordan, loving Fixer Upper, took this by the horns and did an amazing job mixing in her style, as well as Joseph's 'style'.",
                "At this point, Jordan and Joseph have been together for approximately two and a half years. Unbeknownst to Jordan, Joseph started to research rings.",
                "And began talking.",
                "To his family.",
                "and his best friend.",
                "And asked Jordan's mother if he could have her blessing to marry Jordan."
            ]
        },
        {
            title: "I Like The Ring",
            date: "October 28th, 2017",
            descriptions: [
                "Having the ring purchased and families brought up to speed, Jordan planned a game night with both Joseph's and her family. Something they've done many times before.",
                "Trying to not make things seem out of the ordinary, Joseph let Jordan completely set the night up. She cleaned the house and prepped the food.",
                "Jordan was showing her mother around the house for the Halloween decorations she was so proud of, when Joseph positioned his nieces (wearing 'Will you be our aunt?' shirts) at the end of the tour for the big question.",
                "Jordan stopped right in front of Joseph, and Joseph's nieces gestured to their shirts. Jordan read them, and confusedly looked at Joseph",
                "He got down on one knee.",
                "Jordan said yes."
            ]
        },
        {
            title: "We're Getting Married",
            date: "November 17th, 2018",
            descriptions: [
                "All of Jordan and Joseph's experiences, decisions, and late-night talks brought them to this very moment.",
                "They finally got the timing right."
            ]
        }
    ]

    setIndex(index: number) {
        this.storyIndex = index;
        this.ref.detectChanges();
        (<HTMLElement>this.top.nativeElement).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

class Story {
    title: string;
    date: string;
    descriptions: Array<string>;
}