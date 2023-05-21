import extractSrc from '~/utils/extract-src';

const places = [
  {
    id: 1,
    name: 'Whitefish Estate',
    location: {
      name: 'Whitefish, Montana, United States',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-06.jpg')),
      extractSrc(require('./assets/img-21.jpg')),
      extractSrc(require('./assets/img-22.jpg')),
    ],
    pricing: {
      per_night: 10000,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 5.0,
    features: {
      guest_count: 16,
      bedroom_count: 8,
      bed_count: 8,
      bath_count: 8,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Luxury stay in Weston, Saint James, Barbados',
    location: {
      name: 'Weston, Saint James, Barbados',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-09.jpg')),
      extractSrc(require('./assets/img-25.jpg')),
      extractSrc(require('./assets/img-26.jpg')),
    ],
    pricing: {
      per_night: 1500,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 5.0,
    features: {
      guest_count: 8,
      bedroom_count: 4,
      bed_count: 5,
      bath_count: 4,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Numero 22 - Lake Como - Design Living & Lake View',
    location: {
      name: 'Laglio, Lombardia, Italy',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-12.jpg')),
      extractSrc(require('./assets/img-30.jpg')),
      extractSrc(require('./assets/img-29.jpg')),
    ],
    pricing: {
      per_night: 359,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.99,
    features: {
      guest_count: 6,
      bedroom_count: 2,
      bed_count: 3,
      bath_count: 3,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 4,
    name: '7,500 sq ft Private Beachfront Estate',
    location: {
      name: 'Dubai, United Arab Emirates',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-01.jpg')),
      extractSrc(require('./assets/img-41.jpg')),
      extractSrc(require('./assets/img-42.jpg')),
    ],
    pricing: {
      per_night: 2478,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.73,
    features: {
      guest_count: 14,
      bedroom_count: 6,
      bed_count: 11,
      bath_count: 6.5,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Bohemian & Spacious / Private Pool and Garden',
    location: {
      name: 'Tulum, Quintana Roo, Mexico',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-03.jpg')),
      extractSrc(require('./assets/img-34.jpg')),
      extractSrc(require('./assets/img-33.jpg')),
    ],
    pricing: {
      per_night: 199,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.97,
    features: {
      guest_count: 4,
      bedroom_count: 2,
      bed_count: 2,
      bath_count: 2.5,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 6,
    name: 'Designer A-Frame Cabin in the Trees',
    location: {
      name: 'Lake Arrowhead, California, United States',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-05.jpg')),
      extractSrc(require('./assets/img-32.jpg')),
      extractSrc(require('./assets/img-31.jpg')),
    ],
    pricing: {
      per_night: 225,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.93,
    features: {
      guest_count: 6,
      bedroom_count: 3,
      bed_count: 4,
      bath_count: 2,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 7,
    name: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
    location: {
      name: 'Aspen, Colorado, United States',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-11.jpg')),
      extractSrc(require('./assets/img-23.jpg')),
      extractSrc(require('./assets/img-24.jpg')),
    ],
    pricing: {
      per_night: 546,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 5.0,
    features: {
      guest_count: 6,
      bedroom_count: 2,
      bed_count: 4,
      bath_count: 2,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 8,
    name: "Magnolia's Hillcrest Cottage",
    location: {
      name: 'Waco, Texas, United States',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-08.jpg')),
      extractSrc(require('./assets/img-39.jpg')),
      extractSrc(require('./assets/img-40.jpg')),
    ],
    pricing: {
      per_night: 500,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.97,
    features: {
      guest_count: 2,
      bedroom_count: 1,
      bed_count: 1,
      bath_count: 1,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 9,
    name: 'Unique Architecture Cave House by Cycladica',
    location: {
      name: 'Oia, South Aegean, Greece',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-04.jpg')),
      extractSrc(require('./assets/img-27.jpg')),
      extractSrc(require('./assets/img-28.jpg')),
    ],
    pricing: {
      per_night: 930,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.95,
    features: {
      guest_count: 4,
      bedroom_count: 2,
      bed_count: 2,
      bath_count: 1,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 10,
    name: 'ATELIER ArtVillas Costa Rica',
    location: {
      name: 'Uvita, Osa, Puntaneras, Costa Rica',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-07.jpg')),
      extractSrc(require('./assets/img-38.jpg')),
      extractSrc(require('./assets/img-40.jpg')),
    ],
    pricing: {
      per_night: 830,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.8,
    features: {
      guest_count: 6,
      bedroom_count: 3,
      bed_count: 3,
      bath_count: 2,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
  {
    id: 11,
    name: 'Mountainside Luxury Cabin with Batulao View',
    location: {
      name: 'Calaca, Calabarzon, Philippines',
      description: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.',
        },
      ],
      coords: [],
    },
    photo_urls: [
      extractSrc(require('./assets/img-10.jpg')),
      extractSrc(require('./assets/img-35.jpg')),
      extractSrc(require('./assets/img-36.jpg')),
    ],
    pricing: {
      per_night: 483,
      cleaning_fee: 85,
      service_fee: 322,
    },
    rating: 4.87,
    features: {
      guest_count: 8,
      bedroom_count: 2,
      bed_count: 3,
      bath_count: 3,
    },
    about: [
      { type: 'h5', content: 'About this space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
      },
      { type: 'spacer', sy: 3 },
      { type: 'h6', content: 'The Space' },
      { type: 'spacer', sy: 1 },
      {
        type: 'body1',
        color: 'text.secondary',
        content:
          'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.',
      },
    ],
    options: [
      {
        image_url: extractSrc(require('./assets/ic-workspace.svg')),
        content: [
          { type: 'h6', content: 'Dedicated workspace' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-checkin.svg')),
        content: [
          { type: 'h6', content: 'Self check-in' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'Check yourself in with the keypad.',
          },
        ],
      },
      {
        image_url: extractSrc(require('./assets/ic-schedule-check.svg')),
        content: [
          { type: 'h6', content: 'Free cancellation before Jul 25' },
          { type: 'spacer', sy: 1 },
          {
            type: 'body2',
            color: 'text.secondary',
            content: 'A private room with wifi that’s well-suited for working.',
          },
        ],
      },
    ],
    amenities: [
      { tag: 'kitchen', label: 'Kitchen' },
      { tag: 'workspace', label: 'Dedicated workspaces' },
      { tag: 'tv', label: '55” 4k TV' },
      { tag: 'dryer', label: 'Free dryer - in unit' },
      { tag: 'balcony', label: 'Private patio or balcony' },
      { tag: 'wifi', label: 'Wifi' },
      { tag: 'park', label: '1 parking space' },
      { tag: 'wash', label: 'Free washer - in unit' },
      { tag: 'ac', label: 'Centrail air conditioning' },
      { tag: 'heater', label: 'Heating' },
      { tag: 'security', label: 'Security cameras' },
      { tag: 'fan', label: 'Ceiling fans' },
    ],
    reviews: {
      count: 124,
      stats: {
        cleanliness: 5.0,
        accuracy: 4.9,
        communication: 4.8,
        location: 4.8,
        check_in: 4.9,
        value: 4.2,
      },
      entries: [
        {
          id: 1,
          user: {
            name: 'Steve',
            photo_url: extractSrc(require('./assets/img-16.jpg')),
          },
          content:
            "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
          created_at: 'March 2023',
        },
        {
          id: 2,
          user: {
            name: 'Emily',
            photo_url: extractSrc(require('./assets/img-18.jpg')),
          },
          content:
            'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
          created_at: 'March 2023',
        },
        {
          id: 3,
          user: {
            name: 'Daniel',
            photo_url: extractSrc(require('./assets/img-17.jpg')),
          },
          content:
            'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.',
          created_at: 'March 2023',
        },
        {
          id: 4,
          user: {
            name: 'Jackson',
            photo_url: extractSrc(require('./assets/img-19.jpg')),
          },
          content:
            'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.',
          created_at: 'March 2023',
        },
      ],
    },
    host: {
      name: 'Brenda',
      photo_url: extractSrc(require('./assets/img-20.jpg')),
      review_count: 2635,
      verified: true,
      is_superhost: true,
      joined_at: 'August 2014',
      about: [
        {
          type: 'body2',
          color: 'text.secondary',
          content:
            'As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…',
        },
      ],
    },
  },
];

export default places;
