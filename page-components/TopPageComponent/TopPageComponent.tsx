import cn from "classnames";

import { TopPageComponentProps } from "./TopPageComponent.props";

import { Advantages, HhData, Htag, Paragraph, Tag } from "../../components";

import s from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";

const TopPageComponent: React.FC<TopPageComponentProps> = ({
  page,
  products,
  firstCategory,
}): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      <div className={s.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length && (
        <>
          <Htag tag="h2">Преимущества </Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <Paragraph>{page.seoText}</Paragraph>}
      <Htag tag="h2">Получаемые навыки </Htag>
      {page.tags.map((tag) => (
        <Tag color="primary" key={tag}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
