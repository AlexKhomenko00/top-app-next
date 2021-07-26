import cn from "classnames";

import { TopPageComponentProps } from "./TopPageComponent.props";

import { Card, Htag, Tag } from "../../components";

import s from "./TopPageComponent.module.css";

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
      <div className={s.hh}>
        <Card className={s.hhCount}>
          <div className={s.hhStatTitle}>Всего вакансий</div>
          <div className={s.hhStatCount}>{page.hh.count}</div>
        </Card>
      </div>
    </div>
  );
};

export default TopPageComponent;
