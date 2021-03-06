import { devConstants } from '@0xproject/dev-utils';
import { CoverageSubprovider, SolCompilerArtifactAdapter } from '@0xproject/sol-cov';
import * as fs from 'fs';
import * as _ from 'lodash';

let coverageSubprovider: CoverageSubprovider;

export const coverage = {
    getCoverageSubproviderSingleton(): CoverageSubprovider {
        if (_.isUndefined(coverageSubprovider)) {
            coverageSubprovider = coverage._getCoverageSubprovider();
        }
        return coverageSubprovider;
    },
    _getCoverageSubprovider(): CoverageSubprovider {
        const defaultFromAddress = devConstants.TESTRPC_FIRST_ADDRESS;
        const solCompilerArtifactAdapter = new SolCompilerArtifactAdapter();
        const subprovider = new CoverageSubprovider(solCompilerArtifactAdapter, defaultFromAddress);
        return subprovider;
    },
};
