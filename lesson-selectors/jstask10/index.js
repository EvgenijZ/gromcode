'use strict';

export const getTitle = () => document.querySelector('.title').textContent;
export const getDescription = () => document.querySelector('.about').innerHTML;
export const getPlans = () => document.querySelector('.plans').innerHTML;
export const getGoal = () => document.querySelector('.goal').outerHTML;