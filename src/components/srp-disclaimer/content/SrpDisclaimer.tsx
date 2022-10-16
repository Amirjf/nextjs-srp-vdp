import useSWR from 'swr';
import { useReadLocalStorage } from 'usehooks-ts';
import { translateWordpressHtml } from '../../../global/utils/utils';
import useQuery from '../../../hooks/useQuery';
import { SrpDisclaimerContainer } from '../styles/srpDisclaimer.styles';

const SrpDisclaimer = () => {
  const cachedBasedData = useReadLocalStorage('srpOpt');
  const params = useQuery();

  const { data } = useSWR(!cachedBasedData ? '/opt.json?type=srpopt' : null);

  const basedData = cachedBasedData || data;

  const getAppliedCond = params.getAll('cond');

  return (
    <SrpDisclaimerContainer>
      <div style={{ padding: '.5rem 1.4rem' }}>
        {basedData.srp_disclaimer[
          getAppliedCond[getAppliedCond.length - 1]
        ] && (
          <>
            <h2
              style={{
                fontSize: 12,
                color: 'rgba(28, 31, 60, 1)',
                paddingBottom: '.5rem',
              }}
            >
              Disclaimer
            </h2>
            <div
              style={{ fontSize: 11 }}
              dangerouslySetInnerHTML={{
                __html: translateWordpressHtml(
                  basedData.srp_disclaimer[
                    getAppliedCond[getAppliedCond.length - 1]
                  ]
                ),
              }}
            ></div>
          </>
        )}

        <br />
      </div>
    </SrpDisclaimerContainer>
  );
};

export default SrpDisclaimer;
