import { Field, ID, ObjectType } from '@nestjs/graphql';

// 記述に従ってスキーマが自動生成される
@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}
