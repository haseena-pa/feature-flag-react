
export const featureGroups = [
  {
    sectionName: "GENERAL",
    groups: [
      {
        label: "Case Management Group",
        items: [
          {
            label: "Case Management",
            enabled: true,
            hasChildren: false,
            name: "caseManagementToggle",
          },
          
        ],
      },
      {
        label: "Map Timeline Group",
        items: [
          {
            label: "Map Timeline",
            enabled: false,
            hasChildren: false,
            name: "mapTimelineToggle"
          },
        ],
      },
      {
        label: "Views & Briefing Group",
        items: [
          {
            label: "Views & Briefing",
            enabled: true,
            hasChildren: false,
            name: "viewsBriefToggle"
          },
        ],
      },
      {
        label: "Notifications Group",
        items: [
          {
            label: "Notifications",
            enabled: true,
            hasChildren: false,
            name: "notifToggle"
          },
        ],
      },
      {
        label: "Mass Communications Group",
        items: [
          {
            label: "Mass Communications",
            enabled: true,
            hasChildren: false,
            name:"massComToggle"
          },
        ],
      },
      {
        label: "Traffic Cameras Group",
        items: [
          {
            label: "Traffic Cameras",
            enabled: true,
            hasChildren: false,
            name: "trafficToggle"
          },
        ],
      },
    ],
  },
  {
    sectionName: "SETTINGS",
    groups: [
      {
        label: "Settings Group",
        items: [
          {
            label: "Audit",
            enabled: true,
            hasChildren: false,
            name:"auditToggle"
          },
          {
            label: "Users",
            enabled: true,
            hasChildren: true,
            name: "usersToggle",
            children: [
              {
                label: "User Add",
                enabled: true,
                hasChildren: false,
                name: "userAddToggle"
              },
              {
                label: "User Edit",
                enabled: false,
                hasChildren: false,
                name: "userEditToggle",
                value:10,
              },
              {
                label: "User Delete",
                enabled: true,
                hasChildren: false,
                name: "userDeleteToggle"
              },
            ],
          },
        ],
      },
    ],
  },
  {
    sectionName: "ALERTS",
    groups: [
      {
        label: "Alerts Group",
        items: [
          {
            label: "Alert Manager",
            enabled: true,
            hasChildren: false,
            name: "alertToggle"
          },
          {
            label: "Alert Rules",
            enabled: false,
            hasChildren: true,
            name: "alertRuleToggle",
            children: [
              {
                label: "Alert Add",
                enabled: false,
                hasChildren: false,
                 name: "alertAddToggle",
              },
              {
                label: "Alert Edit",
                enabled: false,
                hasChildren: false,
                 name: "alertEditToggle",
              },
              {
                label: "Alert Delete",
                enabled: false,
                hasChildren: false,
                 name: "alertDeleteToggle",
              },
            ],
          },
        ],
      },
    ],
  },
];
