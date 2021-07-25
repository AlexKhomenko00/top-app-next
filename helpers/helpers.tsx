import CourseIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import GoodsIcon from "./icons/goods.svg";
import ServiceIcon from "./icons/services.svg";

import { TopLevelCategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CourseIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServiceIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <GoodsIcon />,
    id: TopLevelCategory.Products,
  },
];
