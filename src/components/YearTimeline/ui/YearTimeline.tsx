import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { YEARS, PROJECTS } from '../model/data';
import type { Year, Project } from '../model/data';
import yearWrapActive from './../../../assets/images/icons/year-wrap-active.png';
import yearWrap from './../../../assets/images/icons/year-wrap.png';

import styles from './YearTimeline.module.scss';

export const YearTimeline = () => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState<Year>(YEARS[0]);

  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timeline}>
        {YEARS.map((year) => {
          const isActive = year === activeYear;

          return (
            <div key={year} className={styles.yearBlock}>
              <div
                className={clsx(styles.year, isActive && styles.active)}
                onClick={() => setActiveYear(year)}
              >
                <div className={styles.imgContainer}>
                  <img
                    className={clsx(styles.img, !isActive && styles.imgFade)}
                    src={isActive ? yearWrapActive : yearWrap}
                    alt="year"
                    onLoad={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = '1';
                    }}
                  />
                  <div className={styles.yearNameContainer}>
                    <div className={styles.yearName}>{year}</div>
                  </div>
                </div>
              </div>
              <div className={styles.lineContainer}>
                <div className={clsx(styles.line, isActive && styles.active)}></div>
                <div className={styles.pointContainer}>
                  <div className={clsx(styles.point, isActive && styles.active)}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.content}>
        {PROJECTS[activeYear]?.map((project: Project) => {
          const isSingleProject = PROJECTS[activeYear].length === 1;
          const isSecondHalf = YEARS.indexOf(activeYear) >= Math.ceil(YEARS.length / 2);
          const projectClass = clsx(
            styles.project,
            isSingleProject && isSecondHalf && styles.projectRight
          );
          return (
            <div key={project.name} className={projectClass}>
              <div className={styles.projectTitle}>{project.name}</div>
              <p className={styles.projectDescription}>{t(project.description)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
