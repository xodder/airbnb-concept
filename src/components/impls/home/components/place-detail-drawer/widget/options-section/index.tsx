import { Column, Row } from '@xod/mui-layout';
import Image from '~/components/shared/image';
import RichText from '~/components/shared/rich-text';
import { useActivePlace } from '../../provider';

function OptionsSection() {
  const place = useActivePlace();

  return (
    <Row flexWrap="wrap" gap={2}>
      {place.options.map((option, i) => (
        <Column key={i} crossAxisAlignment="start" flex={1} gap={2}>
          <Image
            src={option.image_url}
            alt="option"
            height={50}
            fit="contain"
          />
          <RichText content={option.content as any} />
        </Column>
      ))}
    </Row>
  );
}

export default OptionsSection;
