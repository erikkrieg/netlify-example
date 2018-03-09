import CMS from 'netlify-cms'

import TopicPagePreview from './preview-templates/TopicPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('topic-pages', TopicPagePreview)
