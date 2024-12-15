

const employees = [
    {
      "id": 1,
      "firstName": "Arjun",
      "email": "e@e.c",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create landing page",
          "taskDescription": "Design and implement the company landing page.",
          "taskDate": "2024-12-12",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix login bugs",
          "taskDescription": "Resolve user login issues reported in production.",
          "taskDate": "2024-12-10",
          "category": "Bug Fixing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database optimization",
          "taskDescription": "Optimize the database queries for better performance.",
          "taskDate": "2024-12-09",
          "category": "Database"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 2,
      "firstName": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write documentation",
          "taskDescription": "Prepare technical documentation for the API.",
          "taskDate": "2024-12-14",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Setup CI/CD pipeline",
          "taskDescription": "Implement continuous integration and delivery.",
          "taskDate": "2024-12-11",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Run load tests",
          "taskDescription": "Perform load testing on the new module.",
          "taskDate": "2024-12-10",
          "category": "Testing"
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 3,
      "firstName": "Kabir",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Design logo",
          "taskDescription": "Create a new logo for the rebranding project.",
          "taskDate": "2024-12-08",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Social media audit",
          "taskDescription": "Audit the company’s social media presence.",
          "taskDate": "2024-12-15",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Customer survey",
          "taskDescription": "Conduct a survey to gather customer feedback.",
          "taskDate": "2024-12-10",
          "category": "Research"
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 2,
        "failed": 1
      }
    },
    {
      "id": 4,
      "firstName": "Ananya",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Test payment gateway",
          "taskDescription": "Ensure that the payment gateway is functioning correctly.",
          "taskDate": "2024-12-07",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Build mobile app prototype",
          "taskDescription": "Develop a prototype for the mobile app.",
          "taskDate": "2024-12-18",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Client meeting",
          "taskDescription": "Present the project proposal to the client.",
          "taskDate": "2024-12-09",
          "category": "Communication"
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 5,
      "firstName": "Riya",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "SEO optimization",
          "taskDescription": "Improve SEO for the company website.",
          "taskDate": "2024-12-17",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Setup user analytics",
          "taskDescription": "Integrate analytics tools for tracking user activity.",
          "taskDate": "2024-12-12",
          "category": "Analytics"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Update server configurations",
          "taskDescription": "Update and validate server settings for deployment.",
          "taskDate": "2024-12-10",
          "category": "DevOps"
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 2,
        "failed": 1
      }
    },
    {
      "id": 6,
      "firstName": "Raj",
      "email": "a@b.c",
      "password": "123",
      "tasks": [],
      "taskCounts": {
        "active": 0,
        "newTask": 0,
        "completed": 0,
        "failed": 0
      }
    }
  ];
  
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = ()=>{
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))

  }

  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
  }