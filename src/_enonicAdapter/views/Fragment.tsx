import React from "react"
import BaseComponent from './BaseComponent';
import {FragmentData, MetaData, PageComponent, PageData} from '../guillotine/getMetaData';
import {FRAGMENT_DEFAULT_REGION_NAME} from '../utils';

interface FragmentProps {
    page?: PageData;
    component?: FragmentData;
    content?: any;
    meta: MetaData;
}

const FragmentView = (props: FragmentProps) => {
    const {component, page} = props;
    let comps: PageComponent[] = [];
    if (page) {
        // rendering whole page
        const regions = page.regions || {};
        const regionComps = regions[FRAGMENT_DEFAULT_REGION_NAME]?.components;
        if (regionComps) {
            comps.push(...regionComps);
        }
    } else if (component) {
        // rendering a part of a page
        comps.push(...component.fragment.components);
    }
    const {content, meta} = props;

    return (
        <>
            {
                comps.map((comp: PageComponent, i: number) => (
                    <BaseComponent key={i} component={comp} content={content} meta={meta}/>
                ))
            }
        </>
    );
};

export default FragmentView;
