# Florida Energy Systems Consortium
## Website Redesign: Research and Plan

### Project Purpose (Objectives)

The Florida Energy Systems Consortium (FESC) plays a key role in the development of efficient forms of energy generation, distribution and consumption. The consortium pulls the expertise of Florida’s preeminent state universities. The universities are then working towards a shared vision for the State of Florida with minimal duplication of efforts. Since the consortium and its member universities are publicly funded they need make their findings readily available to fulfill their public promise.
While public lectures, new articles and press releases are one way to disseminate information, in the internet age there is usually no better way to communicate with the public than a website. Not all websites are created equal, however. A poorly designed website can be difficult to navigate and in turn obscure the intent of the website and the message its authors are trying to convey. A poorly designed website reflects poorly on the authors of the site which affects public opinion.
Unfortunately, the FESC website (http://floridaenergy.ufl.edu/) does not comply with industry best practices for web design. The design issues with the site will be addressed in more detail in the following sections but in summary the site is not accessible to users with disabilities, it does not scale with the size of the display and it is not easy to navigate. It is imperative that this website undergo a significant overhaul to make it available to a wider audience. As it stands individuals that require screen reader assistance cannot interact with significant portions of the site and visitors on mobile devices will have a difficult time navigating the site.
Therefore, the purpose of this redesign is to first ensure that the FESC website complies with best practices for accessible and mobile design. This will ensure that all Florida tax payers can view the information and research that their tax dollars helped fund. Second, site navigation will be streamlined to facilitate user access and reduce the time spent looking for information. Load times also need to be reduced on the site. Given the content on the site many of the pages load far too slowly and the website or backend server will need to be upgraded to improve response times during site navigation. Finally, a consistent branding is needed for the website to improve site readability.

### State of the Current Site

Before developing a plan to redesign the Florida Energy Systems Consortium (FESC) there is a need to review the current site. In this review any issues with performance, functionality, ease of use, accessibility and mobile design need to be documented. With thorough documentation it is possible to identify areas of improvement.
A key component of modern web design is making sites accessible to individuals with disabilities. This means accommodating screen readers, key board controls, etc… so that
individuals with visual impairments or that are unable to use a mouse can interact with the site. In a review of the FESC site, the homepage along with two subpages (http://floridaenergy.ufl.edu/florida-energy-facts/ & http://floridaenergy.ufl.edu/fl-energy-industry/) where run through a web accessibility checker (https://achecker.ca/checker/index.php). On those three pages the accessibility checker found nearly 200 known problems and almost 700 potential problems that limit accessibility. Most of these problems can be grouped in three areas of web design. The biggest culprit was a lack of contrast in text and background colors that make the site difficult to read for people that are color blind. This can be found in the navigation bars primarily. Next, none of the images on these three pages have alt text attributes. Therefore, screen readers are unable to process this information which in turn means that individuals relying on them do not know that there are images on the page. Finally, images are not clearly separated from the background, making it difficult to tell where an image starts and stops. These were the three most common issues, but the sites also had many other accessibility issues.
Another important consideration when designing a website is ensuring that users with mobile devices can easily access and navigate your site. While testing the mobile friendliness of the FESC site the same three pages were tested. Responsive design checker (http://responsivedesignchecker.com/) was used to view the three webpages in various client devices ranging from iPhones to desktop monitors. The findings from these tests were that most of the content does not adapt to the display size of the client device. Consequently, to read the body paragraphs of these pages on mobile devices and tablets the user needs to scroll horizontally as they read each line.
Some elements on the page do adjust to changes in display sizes. The header and footer of each page attempt to adjust to smaller displays but this presents two issues. The first is overlap, at a certain point the top nav bar stops attempting to fit into only the display width of the device so on phones users still need to scroll horizontally to find all the links. But at that display width the elements begin to overlap which makes it difficult to access the correct link. The other issue is formatting, the footer (which contains links to the participating universities adjusts to all display sizes to ensure that each university logo is visible. The problem is that since most of the content on each page does not adapt there is odd white space on the bottom of the page as one scrolls horizontally. The hodge podge of design choices leads to odd formatting that makes the site difficult to use on anything other than devices with widths equal to or greater than the designed width.
In summary the FESC website, or at least these three pages, were not designed with mobile devices in mind. It is very difficult if not impossible to use this website without accessing it on a desktop computer. Unfortunately, this is not where the issues with this site ends. Even if you do not require the missing accessibility features to interact with the site and you are using a desktop computer or another device with a wide enough display to view the site without horizonal scrolling there are numerous functionality issues with the website.
Just on the homepage of FESC there are several links that do not work properly. One of the most prominent elements on the page, the link to download a brochure does not work and instead results in a 404 error message. Also on that page, there is a LinkedIn icon that instead of opening a LinkedIn page only opens the image of the logo. There is a similar link to Facebook and another to Twitter that work as expected (the link to Twitter is in page navigation so that
should be updated to open in a new tab). Finally, on the homepage there is a textbox to enter an email address to sign up for their newsletter. Unfortunately, there is no clear way to submit your email to FESC and there is certainly no validation that what is entered is a valid address. There are four significant elements on the homepage that are broken. Those were found during a ten minute search, it is likely that a more exhaustive search would have found more issues.
The website contains extensive navigation bars to help users get around the site but the way they are laid out on the page is very confusing. It appears that the top navigation bar takes users to key areas of the site and then there is a side navigation bar that allows users to access specific pages within each area. That side navigation bar changes as you toggle through the links on the top navigation bar. From a cursory search it appears that these links work properly. While the functionality is there the execution is lacking. For one as highlighted in the accessibility review there is poor color contrast in both navigation bars which is both visually unappealing and difficult to use for individuals with color blindness. Second in using two separate navigation bars it is not immediately clear what the purpose of each bar is to the user. A single navigation bar with dropdown menus would be far more effective. In general, the website uses a wide variety of different layouts and designs which makes the site seem disjointed and make it difficult to use.
With all of that said the biggest issue is on mobile devices. Users on mobile devices will be largely unable to use the main navigation bar since the labels overlap to a significant degree and are difficult to select. On top of that the content of the site is difficult to read because users are required to scroll horizontally to view all the webpage content. The last issue with the FESC website is performance.
After running the homepage of FESC through Webpage Test (https://www.webpagetest.org/) from a client based in Orlando, FL it was clear that significant changes are needed to promote faster response times. The webpage took on average four seconds to fully load. That includes all images, scripts and styling. The biggest issues worsening performance were the images and the YouTube video. The images on the site could be reduced in size significantly to improve load times and there is likely a solution to reduce the impact of the YouTube video on performance. It does not seem that the YouTube video is impacting the visual loading of the page, however. In addition, there are scripts and css files that can be moved to the bottom of the html to cause them to load after the webpage content further improving load times. It also seems that the host server is not able to rapidly transmit webpage information to clients. That is not really an issue that can be fixed through improved web design and is largely out of the scope of this project.
While there is significant work to be done to bring the FESC website up to modern design standards for mobile support, accessibility and performance none of the required changes are difficult to implement. It is possible to setup a project scope to develop a pilot project to demonstrate the benefits of the proposed changes.

### User Research

Four key user groups will comprise the vast majority of visitors to the FESC website. These are scientists, students, residents of the State of Florida and Florida policy makers and
government officials. Given the significant amount of research that the FESC supports through its member universities it is likely that scientists interested in energy research will go to the FESC website to learn more about the latest studies conducted by the organization. These scientists will typically be looking at the specific reports and studies that are published by member institutions. They may be looking for research to cite in their own reports, scientists that they can contact about collaborating on a project or they may just be interested in the field.
Next students, typically those enrolled in a university but also those in high school or middle school will use the site to locate research papers that they can use in their schoolwork. While students will be interested in detailed reports to a certain degree they will be most interested in quick fact sheets/bullet points that they can reference. The information they are looking for is similar but more condensed than that of the scientist. They then will need a different set of information and navigation tools to locate the information they need. These students may also be interested in learning about any internship opportunities through the FESC or its member institutions.
The third group of visitors are residents of the State of Florida. These individuals are interested to read about how the FESC is supporting the State of Florida and how their tax dollars are being spent. They could also be homeowners that are interested in learning about how they can generate renewable energy on their own property. The needs of this group then are different than that of students and scientists, these residents will want quick fact sheets on the agencies progress towards its goals and they will also want information for property owners. There is also a need to provide interested residents a way to volunteer within the group or a way for them to receive updates on events, projects, etc. that the FESC sponsors.
Finally, policy makers and government officials will be frequent visitors of the website. They will want access to detailed reports that guide their decision making when it comes to addressing the energy needs of the state. Since the FESC is composed of industry experts, these officials will come to the website looking for guidance. These visitors will want access to detailed reports that address not only the pros and cons of each form of energy production, distribution, consumption, etc. but they will also want to see benefit cost analyses of each proposal. With that information they can propose and enact public policy that benefits their constituents. It is also possible that these local or national agencies provided the FESC with grant money. In those cases, the agency funding the research will want to view how their money was spent and the result of the project.
Other groups will access the site, but their numbers will be far lower than that of the four groups outlined above so at this time it is not worth investing the resources to cater the site to their needs. If in the future another key user group is identified the scope of the website can be updated to address them.

### Device Support

Given the current internet climate it is likely impossible to find a website that does not need to be compatible with mobile devices. The FESC website is no exception. With students and residents accessing this site it is necessary to redesign the site in such a way that individuals on phones and tablets can easily navigate the site and view its contents. If only scientists and government officials needed to view the site mobile support might not be necessary since they would likely view the site in their official capacity. In that official capacity they would almost certainly interact with the site through a desktop computer. That is not the case, however, students and residents will more likely than not go to the site on their smart phone or tablet.

### Recommendations

- The new website shall meet all the accessibility requirements that are outlined on: https://achecker.ca/checker/index.php. This includes adding alternate text to all media on the website and improving the color contrast used between text and the background.
- The layout of webpage content will dynamically update based on the screen resolution of the browser. The goal for this deliverable is to ensure that there is no horizontal scrolling regardless of what type of device is accessing the webpage.
- Develop a consistent theme across all webpages to simplify site navigation and reduce confusion. A template will be developed with a header/footer and content area that can replicated across the website.
- Remove the side navigation bar and maintain only the top nav bar but add dropdown menus under each category.
- Design content areas around the primary users of the website. Develop an area(s) that allow for quick access to the following subsets of information: scientific reports, quick facts, outreach efforts and policy positions.
- Reduce the load time of the website by compressing images and videos where possible, loading scripts at the bottom of the HTML and minifying CSS and JS files.
- Make sure that all linked content, forms, etc. actually works on the new site. Several links and forms on the current webpage do not work. Perform a thorough review of the site and correct any issues in the new website.
- Implement an image carousel on the homepage to promote the efforts of the FESC. Make use of Bootstrap to implement the carousel.

