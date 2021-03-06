import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        trigger('listStagger', [
            transition('* <=> *', [
                query(':enter', [
                    style({ opacity: 0, transform: 'translateY(-20px)' }),
                    stagger('50ms',
                        animate('550ms ease-out',
                            style({ opacity: 1, transform: 'translateY(0px)' })))
                ], { optional: true }),
                query(':leave', animate('50ms', style({ opacity: 0 })),
                    { optional: true })
            ])
        ])
    ]
})
export class ProjectsComponent implements OnInit {
    title: string;
    description: string;
    constructor() {

    }

    contacts = [
        {
            title: "Phone",
            description: "(718) 594-3470",
            href: "tel:7185943470"
        },
        {
            title: "Email",
            description: "mattpritchard4@gmail.com",
            href: "mailto:mattpritchard4@gmail.com",
        },
        {
            title: "Github",
            description: "https://github.com/mattpritchard4",
            href: "https://github.com/mattpritchard4"
        }
    ];

    languages = [
        "JavaScript", "TypeScript", "Ruby", "Racket", "HTML/CSS", "PHP", "Bash"
    ];

    tools = [
        "Emacs", "git", "SASS", "jQuery", "API Integration", "Pug", "Pollen", "CSS Grid", "Bootstrap"
    ];

    frameworks = [
        "Angular 6/7", "Webflow", "WordPress", "Braze", "Agility Harmony", "Oracle Responsys", "Sailthru"
    ];

    responsibilities = [
        {
            title: "Front end web development for multiple marketing clients"
        },
        {
            title: "Maintenance of React/GatsbyJS based agency website"
        },
        {
            title: "Automation of internal agency projects"
        },
        {
            title: "Implementing programmatic logic into advanced marketing emails in multiple ESPs"
        },
        {
            title: "Production and QA of HTML marketing email for multiple clients"
        },
        {
            title: "Reporting and analytics on marketing campaign performance"
        },
        {
            title: "Audience segmentation/targeting/retargeting for intelligent digital marketing campaigns"
        },
        {
            title: "Hiring, training, and management of new developers"
        }
    ];

    projects = [
        {
            title: "Seeker - Design Automation",
            description: "The design and development teams were responsible for daily updates to a newsletter for a pop-science web publication.I identified multiple bottlenecks in our process and fully automated the design portion of the work by leveraging Ruby's Mechanize gem to scrape the necessary visual assets from the web.Upon obtaining these assets, image processing libraries were used to intelligently crop, resize, and overlay these assets into a template form for easy incorporation into the final daily product.This freed up over 400 hours of design labor, annually, which could be applied to new client work."
        },
        {
            title: "Discovery Inc. - Email Automation",
            description: "As a developer working for a digital marketing agency I was responsible for creating a large amount of marketing email for multiple clients. Using a Racket library called Pollen, I was able to automate the generation of all marketing emails for Discovery Inc., and greatly reduce the number of rendering issues we encountered in our Quality Assurance process. This system is still in use and was the basis for developing a similar solution for other our other clients using JavaScript and Pug."
        },
        {
            title: "Jet.com - Jet Blog (Currently Not Maintained)",
            description: "Built the front end for Jet's blog in 2017 and maintained it through early 2018 before Jet canceled the project due to internal restructuring. The Jet editorial team selected an enterprise level WordPress service to serve this project.  The front end was built in HTML, CSS, PHP and JavaScript and was implemented based off of design documents created in Zepplin."
        },
        {
            title: "MIT Tech Review - Landing Pages",
            description: "HTML/CSS/JavaScript development for MIT Tech Review subscription landing pages. This project had severe technical limitations imposed upon it through the use of a legacy CMS platform.  Extensive use of jQuery was used to manipulate HTML that couldn't be directly edited by the development team."
        }
    ];



    ngOnInit() {

    }

}
