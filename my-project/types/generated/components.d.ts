import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    description: '';
    displayName: 'row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtomLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttom_links';
  info: {
    displayName: 'Buttom Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.buttom-link', false>;
    price: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    rating: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    reviews: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    slug: Schema.Attribute.UID<'heading'> & Schema.Attribute.Unique;
  };
}

export interface ElementsPrice extends Struct.ComponentSchema {
  collectionName: 'components_elements_price';
  info: {
    description: 'Price component for courses.';
    displayName: 'price';
  };
  attributes: {
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u20B9'>;
    current: Schema.Attribute.Float & Schema.Attribute.Required;
    original: Schema.Attribute.Float;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.row': BlocksRow;
      'elements.buttom-link': ElementsButtomLink;
      'elements.card': ElementsCard;
      'elements.price': ElementsPrice;
    }
  }
}
