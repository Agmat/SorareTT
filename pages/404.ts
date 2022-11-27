import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace(
      '/cards/marco-verratti-2021-unique-1,lionel-andres-messi-cuccittini-2022-limited-44,hugo-lloris-2022-common-1437d069-595c-4378-a423-4b4af2aee2bb,aurelien-tchouameni-2022-rare-18'
    );
  }, [router]);

  return null;
}
