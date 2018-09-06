import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Subscription, Observable, fromEvent } from "rxjs";


@Component({
    selector: 'our-story',
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {
    storyIndex: number = 0;

    @ViewChild('ourstory') top: ElementRef;
    topInView: boolean = false;

    scrollPos: number;
    windowHeight: number;

    subscriptionScroll: Subscription;

    constructor(private ref: ChangeDetectorRef) {

    }

    ngAfterViewInit() {
        this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
        this.onScroll();
    }

    checkVisibility() {
        if ((this.scrollPos + 200) >= (<HTMLDivElement>this.top.nativeElement).getBoundingClientRect().top) {
            if (!this.topInView) {
                this.topInView = true;
            }
        }
    }

    onScroll() {
        this.scrollPos = window.scrollY;
        this.windowHeight = window.innerHeight;
        this.checkVisibility();
    }

    stories: Array<Story> = [
        {
            title: "I Like Your Shirt",
            date: "Fall 2007",
            descriptions: [
                "Every story has to have a beginning. This is ours.",
                'Joseph and Jordan are both sophomores at Lincoln-Way East High School in Frankfort, Illinois. They both happen to share a class together. English, to be precise. Typically, nothing too exciting happens in English class, but Joseph\'s Tadahito Iguchi White Sox shirt sparked Jordan\'s interest. Jordan and Joseph are huge fans of the Chicago White Sox, and as fate would have it, something wonderful would come out of a simple four words, "I like your shirt".'
            ]
        },
        {
            title: "It's All About Timing",
            date: "2008 - 2010",
            descriptions: [
                "Afterwards, Jordan and Joseph soon discovered something extremely fickle and invisible: Timing. Jordan and Joseph liked each other. Very much, actually. It's just that the timing was always off. Like a pendulum, the momentum of who liked who swung back and forth. If Joseph wanted to date Jordan, she was unavailable, and vice-versa. While being best friends, they both thought the timing would never be in their favor to be something more..."
            ]
        },
        {
            title: "The Next Adventure",
            date: "2010-2014",
            descriptions: [
                "Jordan and Joseph graduated from Lincoln-Way East and soon parted way to different colleges. Joseph attended DePaul University in Chicago while Jordan attended The University of Illinois at Urbana-Champaign. Joseph immersed himself in Computer Science, where he met some of his groomsmen. Jordan ended up meeting some of her bridesmaids (and favorite campus squirrels) while studying Graphic Design. College life distanced them, but every time they caught up with one another, it was as if a single moment has passed."
            ]
        },
        {
            title: "I Like Her Wit",
            date: "February 2015",
            descriptions: [
                'Soon before Jordan graduated, they decided to have lunch at Chili\'s in their hometown for a quick get-together to catch up. They haven\'t seen each other in years and never would have though this meeting could be anything more than two friends having lunch. They touched on many subjects, ranging from how college was, to work, to Joseph\'s most fascinating topic, Isaac Asimov\'s "Three Laws of Robotics" (you know, typical conversation). After spending six hours together, Joseph started to think, "I like her wit".']
        },
        {
            title: "Maybe, Just Maybe",
            date: "April 12, 2015",
            descriptions: [
                "After the six hour lunch, Jordan and Joseph started to see more of each other. From going to see a movie, out to the bars, or staying up until three in the morning talking to each other, Jordan and Joseph continued to spend time together. Joseph began thinking that maybe, just maybe, the timing was just right. And so, on April 12, 2015, Joseph visited Jordan at the University of Illinois with flowers and her personal favorite, Reese's Peanut Butter Cups. They stood beneath the South Quad Bell Tower, and Joseph asked Jordan to be his girlfriend. Jordan said yes."
            ]
        },
        {
            title: "1200 Miles",
            date: "2015 - 2016",
            descriptions: [
                "Jordan had always dreamed of working at Disney, and she finally got her chance when she interned at Disney Springs at Walt Disney World. Jordan and Joseph were still determined to make things work between them. Between the numerous Skype dates, care packages, Southwest Frequent Flyer Miles, and a surprise visit home for Christmas, Jordan and Joseph did the best they could to turn 1200 miles into the smallest distance possible. During this time, Joseph went to Disney for the first time, in forever, and even had Jordan as his own personal tour guide. Throughout the year that Jordan was living in Florida, they found that distance only made them stronger."
            ]
        },
        {
            title: "I'd Like Your Blessing",
            date: "Summer 2017",
            descriptions: [
                "Life for Jordan and Joseph was good. Once Jordan was back from Disney, they found a place to call home together. At this point, Jordan and Joseph have been together for approximately two and a half years. Unbeknownst to Jordan, Joseph started researching rings and began talking to his family and his best friend about his upcoming plans for Jordan. He then asked Jordan's mother if he could have her blessing to marry her daughter."]
        },
        {
            title: "I Like The Ring",
            date: "October 28, 2017",
            descriptions: [
                "Having the ring purchased and families brought up to speed, Jordan planned a game night with family. This was something they've done many times before. Trying to not make things seem out of the ordinary, Joseph let Jordan completely set the night up. She even cleaned the house and prepped the food. (Let's just say that once she found out this turned into an engagement party, she wasn't too pleased with Joseph, but the ring helped). Jordan was showing her mother around the house for the Halloween decorations she was so proud of, when Joseph positioned his nieces (wearing 'Will you be our aunt' shirts) at the end of the tour for the big question. Jordan stopped right in front of Joseph, and his nieces gestured to their shirts. Jordan read them, and confusedly looked at Joseph. He got down on one knee, asked the big question, and Jordan said yes."
            ]
        },
        {
            title: "We're Getting Married",
            date: "November 17, 2018",
            descriptions: [
                "All of Jordan and Joseph's experiences, decisions, and late-night talks brought them to this very moment. They are so blessed to have each other and are ready for their next adventure together. They finally got the timing right."
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
