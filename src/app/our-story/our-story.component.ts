import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'our-story',
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {
    storyIndex: number = 0;

    @ViewChild('ourstory') top: ElementRef;

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
                "Jordan and Joseph graduated from Lincoln-Way East, and went to University. Never quite getting the timing just right",
                "Joseph to DePaul University in Chicago",
                "and Jordan to The University of Illinois in Urbana/Champaign.",
                "Joseph was immersed in a urban environment in the hustle and bustle of downtown Chicago where he met some of his soon-to-be groomsmen",
                "while Jordan would be in southern Illinois where she became friends with several of her soon-to-be bridesmaids (and squirrels).",
                "Sure, college life and distance separated them greatly, and they would talk every once in a while. When Jordan and Joseph talked, however, it's as if not a single moment has passed.",
                "Once Joseph graduated from DePaul, he decided to meet Jordan for lunch back in their hometown. What should've been only a quick get-together turned into a 7-hour lunch and dinner."
            ]
        },
        {
            title: "No Longer a Pendulum",
            date: "April 12th, 2015",
            descriptions: [
                "After the 7 hour lunch, Jordan and Joseph started to see more of each other. From going to see a movie, out to the bars, or staying up until three in the morning talking to each other, Jordan and Joseph did more of it.",
                "Joseph began thinking that maybe, just maybe the timing was just right. And so, on April 12th, 2015, Joseph visited Jordan at the University of Illinois with flowers and Reeses, and asked Jordan to be his girlfriend.",
                "Jordan said yes."
            ]
        },
        {
            title: "I'd Like Your Blessing",
            date: "Summer 2017",
            descriptions: [
                "Life for Jordan and Joseph was good. They moved in together and started to create something they both can call home",
                "Jordan, loving Fixer Upper, took this by the horns and did an amazing job mixing in her style, as well as Joseph's 'style'.",
                "At this point, Jordan and Joseph have been together for approximately two and a half years. Unbeknownst to Jordan, Joseph started to research rings.",
                "And began talking.",
                "To his family.",
                "and his best friend.",
                "And asked Jordan's mother if he could have her blessing to marry Jordan."
            ]
        },
        {
            title: "Popping the Question",
            date: "October 28th, 2017",
            descriptions: [
                "Having the ring purchased and families brought up to speed, Joseph planned a game night with both his and Jordan's family. Something they've done many times before.",
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