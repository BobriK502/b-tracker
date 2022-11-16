const DASHBOARD_PATH: string = '/';
const PLANNING_PATH: string = '/planning';
const ANALYTHIC_PATH: string = '/analythic';
const INCOME_AND_DEPOSIT: string = '/income';

export type Pathes = {
  [key:string]: string
};

export type Navigation = {
  pathes: Pathes
};

export default {
  pathes: {
    dashboard: DASHBOARD_PATH,
    planning: PLANNING_PATH,
    analythic: ANALYTHIC_PATH,
    income: INCOME_AND_DEPOSIT,
  },
} as Navigation;
