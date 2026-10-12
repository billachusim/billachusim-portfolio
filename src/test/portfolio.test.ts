import {describe,it,expect} from 'vitest';
import {projects,filterProjects,experience,articles} from '@/content/portfolio';
import {validateInquiry} from '@/components/portfolio/pages';
describe('Evidence-based portfolio content',()=>{
 it('does not assert unknown projects are live',()=>{expect(projects.filter(p=>p.status==='Live')).toHaveLength(0)});
 it('does not duplicate unconfirmed Secret Diary / Alter Ego',()=>{expect(projects.filter(p=>/Secret Diary|Alter Ego/.test(p.name))).toHaveLength(0);expect(projects.filter(p=>p.name==='Dear Claire')).toHaveLength(1)});
 it('contains all 18 distinct supplied projects',()=>{expect(projects).toHaveLength(18);expect(projects.some(p=>p.name==='ExamsAI.ng')).toBe(true)});
 it('preserves completed fellowship dates',()=>{expect(experience.find(e=>e.organization==='Stanford University')?.dates).toBe('June — July 2026')});
 it('does not fabricate articles',()=>{expect(articles).toHaveLength(0)});
});
describe('Project filters',()=>{
 it('searches real names case insensitively',()=>{expect(filterProjects(' CLAIRE ','All projects','All statuses').map(p=>p.name)).toEqual(['Dear Claire'])});
 it('searches descriptions and categories',()=>{expect(filterProjects('preservation','All projects','All statuses').map(p=>p.name)).toEqual(['Reengage African Voices']);expect(filterProjects('Mobile Applications','All projects','All statuses').map(p=>p.name)).toEqual(['Dear Claire','Dialer App'])});
 it('combines category and status with search',()=>{expect(filterProjects('claire','Web Applications','All statuses')).toHaveLength(0);expect(filterProjects('','All projects','Live')).toHaveLength(0)});
});
describe('Inquiry validation',()=>{
 it('rejects invalid input',()=>{expect(Object.keys(validateInquiry({name:'',email:'invalid',organization:'',type:'',message:''}))).toEqual(['name','email','type','message'])});
 it('accepts a complete inquiry without requiring organization',()=>{expect(validateInquiry({name:'Alex',email:'alex@example.com',organization:'',type:'Engineering opportunity',message:'I would like to discuss an engineering opportunity.'})).toEqual({})});
});
