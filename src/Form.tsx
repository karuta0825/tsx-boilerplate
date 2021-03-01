import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
  username: string;
  jender: string;
  age: number;
  likes?: string;
};

const schema = yup.object().shape({
  username: yup.string().required('名前いれんとあかんで'),
  jender: yup.string().required(),
  age: yup.number().positive('1以上やで').integer().required(),
  c: yup.boolean(),
  java: yup.boolean(),
  clojure: yup.boolean(),
  blood: yup.string(),
  kanso: yup.string(),
});

export const Form = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="userName">名前</label>
        <input id="userName" name="username" ref={register} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <label htmlFor="man">男</label>
        <input id="man" name="jender" type="radio" value="m" defaultChecked ref={register} />

        <label htmlFor="female">女</label>
        <input id="female" name="jender" type="radio" value="f" ref={register} />
      </div>

      <div>
        <label htmlFor="age">年齢</label>
        <input id="age" name="age" type="number" defaultValue={0} ref={register} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <div>
        <p>経験した言語</p>

        <input id="c" type="checkbox" name="c" ref={register} />
        <label htmlFor="c">C</label>

        <input id="java" type="checkbox" name="java" ref={register} />
        <label htmlFor="java">Java</label>

        <input id="clojure" type="checkbox" name="clojure" ref={register} />
        <label htmlFor="clojure">Clojure</label>
      </div>

      <div>
        <select name="blood" ref={register}>
          <option value="A">A型</option>
          <option value="B">B型</option>
          <option value="O">O型</option>
          <option value="AB">AB型</option>
        </select>
      </div>

      <div>
        <label htmlFor="other">感想欄</label>
        <textarea id="other" name="kanso" ref={register} defaultValue="" />
      </div>

      <input type="submit" />
    </form>
  );
};
