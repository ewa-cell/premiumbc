/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  name: string;
  role: string;
  portrait: string;
  experience: string;
}

export interface ProblemCard {
  id: string;
  number: string;
  titleEn: string;
  titlePl: string;
  descriptionEn: string;
  descriptionPl: string;
  diagnosticMetric: string; // Strategic question linked to this problem
}

export interface SystemElement {
  id: string;
  labelEn: string;
  labelPl: string;
  roleEn: string;
  rolePl: string;
  dependencyEn: string;
  dependencyPl: string;
  connectedTo: string[]; // ids of connected elements
  color: string;
}

export interface WorkStep {
  step: number;
  titleEn: string;
  titlePl: string;
  focusEn: string;
  focusPl: string;
  detailsEn: string[];
  detailsPl: string[];
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titlePl: string;
  taglineEn: string;
  taglinePl: string;
  descriptionEn: string;
  descriptionPl: string;
  scopeEn: string[];
  scopePl: string[];
}

export interface ClientFitItem {
  id: string;
  textEn: string;
  textPl: string;
  strategicExplanationEn: string;
  strategicExplanationPl: string;
}

export interface EditorialInsight {
  id: string;
  categoryEn: string;
  categoryPl: string;
  titleEn: string;
  titlePl: string;
  excerptEn: string;
  excerptPl: string;
  contentEn: string;
  contentPl: string;
  date: string;
  readTime: string;
}

export interface ExperienceLogo {
  name: string;
  roleEn: string;
  rolePl: string;
}
