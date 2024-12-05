import { AcademicCapIcon, BriefcaseIcon, EnvelopeIcon, GlobeAltIcon, LanguageIcon, MapPinIcon, PhoneIcon, TrophyIcon, UserIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { formatDate, formatYear, getEndYear } from "./utils/formatter";

import { Section } from './components/Section';
import { List } from "./components/List";
import { Header } from "./components/Header";

import { educations } from "./assets/data/education";
import { skills } from "./assets/data/skills";
import { achievements } from "./assets/data/achievement";
import { experiences } from "./assets/data/experience";
import { languages } from "./assets/data/language";

interface Contact {
  icon: JSX.Element;
  value: string;
}

const contacts: Contact[] = [
  {
    icon: <EnvelopeIcon aria-hidden="true" className="size-4" />,
    value: "brln.simmons@example.com",
  },
  {
    icon: <PhoneIcon aria-hidden="true" className="size-4" />,
    value: "(207) 555-0119",
  },
  {
    icon: <MapPinIcon aria-hidden="true" className="size-4" />,
    value: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  {
    icon: <GlobeAltIcon aria-hidden="true" className="size-4" />,
    value: "https://www.portofolio.com",
  },
];

export default function App() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-base/7 text-gray-700 mx-auto max-w-3xl">
        <Header />
        <div className="flex flex-col items-start gap-x-10 md:flex-row">
          <div className="space-y-8 w-full md:w-auto">
            <Section title="CONTACT" icon={UserIcon}>
              {contacts.map((contact, index) => (
                <address key={index} className="flex items-start gap-x-4 not-italic">
                  <div className="shrink-0 flex justify-center items-center size-8 bg-indigo-100 rounded-full">
                    <div className="text-indigo-500">{contact.icon}</div>
                  </div>
                  <p>{contact.value}</p>
                </address>
              ))}
            </Section>
            <Section title="EDUCATION" icon={AcademicCapIcon}>
              <List content={educations}>
                {(education) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">{education.degree}</h4>
                    <h5 className="text-base/6 font-medium">{education.institution}</h5>
                    <div className="space-x-1.5">
                      <time dateTime={education.date.from}>{formatYear(education.date.from)}</time>
                      <span>-</span>
                      <time dateTime={education.date.to}>{getEndYear(education.date.to)}</time>
                    </div>
                    <p>GPA <strong>{education.gpa.toFixed(2)}</strong></p>
                  </>
                )}
              </List>
            </Section>
            <Section title="SKILLS" icon={WrenchScrewdriverIcon}>
              {skills.map((skill, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div>
                    <h4 className="text-gray-800">{skill.name}</h4>
                  </div>
                  <div>
                    <label htmlFor={skill.name} className="sr-only">{skill.name}</label>
                    <progress id={skill.name} value={skill.level} max="100" />
                  </div>
                </div>
              ))}
            </Section>
            <Section title="LANGUAGES" icon={LanguageIcon}>
              {languages.map((language, index) => (
                  <div key={index} className="grid grid-cols-2">
                    <div>
                      <h4 className="text-gray-800">{language.name}</h4>
                    </div>
                    <div>
                      <label htmlFor={language.name} className="sr-only">{language.name}</label>
                      <progress id={language.name} value={language.level} max="100" />
                    </div>
                  </div>
                ))}
            </Section>
          </div>

          <div className="space-y-8 w-full">
            <Section title="ACHIEVMENT" icon={TrophyIcon}>
              <List content={achievements}>
                {(achievment) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">{achievment.title}</h4>
                    <h5 className="font-medium">{achievment.institution}</h5>
                    <time dateTime={achievment.date}>{formatDate(achievment.date)}</time>
                    <p className="text-sm/6">{achievment.description}</p>
                  </>
                )}
              </List>
            </Section>
            <Section title="WORK EXPERIENCE" icon={BriefcaseIcon}>
              <List content={experiences}>
                {(experience) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">{experience.title}</h4>
                    <h5 className="font-medium">{experience.company}</h5>
                    <div className="space-x-1.5">
                      <time dateTime={experience.date.from}>{formatYear(experience.date.from)}</time>
                      <span>-</span>
                      <time dateTime={experience.date.to}>{getEndYear(experience.date.to)}</time>
                    </div>
                    <ul className="marker:text-indigo-500 list-disc pl-5 space-y-2 py-2">
                      {experience.achievements.map((task, index) => (
                        <li key={index} className="text-sm/6 text-gray-700">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </List>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
