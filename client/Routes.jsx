import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './Resolutions/ResolutionsWrapper.jsx';

FlowRouter.route('/',{
    //What happens when you are getting routed
    action(){
        mount(MainLayout, {
            content: (<ResolutionsWrapper />)
        })
    }
});