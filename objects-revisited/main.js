const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 3,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Billy: {
      position: 'Sales rep',
      daysWorking: ['M', 'W', 'F'],
    },
    Bob: {
      position: 'Manager',
      daysWorking: ['M', 'T', 'W'],
    },
    Bobby: {
      position: 'Customer service rep',
      daysWorking: ['M', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  business.daysOpen.push('Sa', 'Su');
  for (const key in business.employees) {
    business.employees[key].daysWorking.push('Sa', 'Su');
  }
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    for (let i = 0; i < 4; i++) {
      business.employees[xhr.response[i].name] = {
        position: null,
        daysWorking: null,
      };
    }
    business.employees['Clementine Bauch'].position = 'Marketing specialist';
    business.employees['Ervin Howell'].position =
      'Human Resources representative';
    business.employees['Leanne Graham'].position = 'Assistant Manager';
    business.employees['Patricia Lebsack'].position = 'Project Manager';
    for (const key in business.employees) {
      business.employees[key].weekDayWorkDays =
        Math.floor(Math.random() * 5) + 1;
      if (business.employees[key].weekDayWorkDays + 2 > 5) {
        business.employees[key].fullTime = true;
      } else {
        business.employees[key].fullTime = false;
      }
    }
    business.totalEmployees = Object.keys(business.employees).length;
  });
  xhr.send();
}

function deleteEmployee(employee) {
  delete business.employees[employee];
  business.totalEmployees--;
}

document.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  addEmployees();
  deleteEmployee('Bob');
});
