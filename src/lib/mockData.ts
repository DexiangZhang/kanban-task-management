import { Task } from "../app/types";
import { nanoid } from "nanoid";

const initialTasks: Task[] = [
  {
    id: nanoid(),
    title: "Design the new landing page",
    description:
      "Create a modern, clean, and responsive design for the main landing page, focusing on user experience and conversion.",
    status: "done",
    assignee: "Alice",
    priority: "high",
    createdAt: new Date("2025-09-01T10:00:00Z"),
    dueDate: new Date("2025-09-05T23:59:59Z"),
    tags: ["design", "ui"],
  },
  {
    id: nanoid(),
    title: "Develop user authentication",
    description:
      "Implement a secure and reliable user authentication system, including registration, login, and password reset functionalities.",
    status: "in-progress",
    assignee: "Bob",
    priority: "high",
    createdAt: new Date("2025-09-02T11:00:00Z"),
    dueDate: new Date("2025-09-10T23:59:59Z"),
    tags: ["development", "backend"],
  },
  {
    id: nanoid(),
    title: "Setup CI/CD pipeline",
    description:
      "Configure a continuous integration and continuous deployment pipeline to automate testing and deployment processes.",
    status: "in-progress",
    assignee: "Charlie",
    priority: "medium",
    createdAt: new Date("2025-09-03T12:00:00Z"),
    tags: ["devops"],
  },
  {
    id: nanoid(),
    title: "Write API documentation",
    description:
      "Document all API endpoints, request/response formats, and authentication requirements for external developers.",
    status: "scheduled",
    assignee: "Bob",
    priority: "medium",
    createdAt: new Date("2025-09-04T13:00:00Z"),
    dueDate: new Date("2025-09-15T23:59:59Z"),
    tags: ["documentation"],
  },
  {
    id: nanoid(),
    title: "Test payment gateway integration",
    description:
      "Conduct thorough end-to-end testing of the payment gateway to ensure seamless and secure transactions.",
    status: "scheduled",
    assignee: "Diana",
    priority: "high",
    createdAt: new Date("2025-09-05T14:00:00Z"),
    dueDate: new Date("2025-09-18T23:59:59Z"),
    tags: ["testing", "qa"],
  },
  {
    id: nanoid(),
    title: "Fix responsive layout bugs",
    description:
      "Identify and resolve all known CSS and layout issues to ensure the application displays correctly on various devices and screen sizes.",
    status: "in-progress",
    assignee: "Alice",
    priority: "medium",
    createdAt: new Date("2025-09-06T15:00:00Z"),
    tags: ["bugfix", "css"],
  },
  {
    id: nanoid(),
    title: "Create marketing materials",
    description:
      "Design and develop various marketing assets, including social media graphics and a promotional video.",
    status: "done",
    assignee: "Eve",
    priority: "low",
    createdAt: new Date("2025-08-28T09:00:00Z"),
    dueDate: new Date("2025-09-02T23:59:59Z"),
    tags: ["marketing"],
  },
  {
    id: nanoid(),
    title: "User acceptance testing (UAT)",
    description:
      "Collaborate with end-users to perform final testing of the application and gather feedback before the official launch.",
    status: "scheduled",
    assignee: "Diana",
    priority: "high",
    createdAt: new Date("2025-09-08T16:00:00Z"),
    dueDate: new Date("2025-09-20T23:59:59Z"),
    tags: ["testing"],
  },
  {
    id: nanoid(),
    title: "Deploy to staging server",
    description:
      "Push the latest code changes to the staging environment for final review and quality assurance.",
    status: "scheduled",
    assignee: "Charlie",
    priority: "medium",
    createdAt: new Date("2025-09-10T10:00:00Z"),
    dueDate: new Date("2025-09-22T23:59:59Z"),
    tags: ["deployment", "devops"],
  },
  {
    id: nanoid(),
    title: "Optimize database queries",
    description:
      "Analyze and improve the performance of slow database queries to reduce load times and enhance overall application speed.",
    status: "in-progress",
    assignee: "Bob",
    priority: "high",
    createdAt: new Date("2025-09-09T14:00:00Z"),
    dueDate: new Date("2025-09-14T23:59:59Z"),
    tags: ["backend", "performance"],
  },
  {
    id: nanoid(),
    title: "Update third-party libraries",
    description:
      "Upgrade all third-party dependencies to their latest stable versions to ensure security and access to new features.",
    status: "done",
    assignee: "Charlie",
    priority: "low",
    createdAt: new Date("2025-09-01T18:00:00Z"),
    tags: ["maintenance"],
  },
  {
    id: nanoid(),
    title: "Refactor old component library",
    description:
      "Restructure and modernize the legacy component library to improve code maintainability and reusability.",
    status: "scheduled",
    assignee: "Alice",
    priority: "medium",
    createdAt: new Date("2025-09-11T11:00:00Z"),
    dueDate: new Date("2025-09-25T23:59:59Z"),
    tags: ["refactor", "frontend"],
  },
  {
    id: nanoid(),
    title: "Onboard new developer",
    description:
      "Guide the new team member through the development environment setup and introduce them to the project codebase.",
    status: "done",
    assignee: "Frank",
    priority: "low",
    createdAt: new Date("2025-09-02T09:00:00Z"),
    tags: ["hr"],
  },
  {
    id: nanoid(),
    title: "Plan Q4 feature roadmap",
    description:
      "Define the key features, priorities, and timelines for the next quarter to align with business objectives.",
    status: "in-progress",
    assignee: "Frank",
    priority: "high",
    createdAt: new Date("2025-09-05T10:00:00Z"),
    tags: ["planning", "strategy"],
  },
  {
    id: nanoid(),
    title: "Review user feedback from survey",
    description:
      "Analyze the results from the recent user feedback survey to identify pain points and opportunities for improvement.",
    status: "scheduled",
    assignee: "Eve",
    priority: "medium",
    createdAt: new Date("2025-09-12T09:30:00Z"),
    dueDate: new Date("2025-09-16T23:59:59Z"),
    tags: ["feedback", "research"],
  },
];

export default initialTasks;
