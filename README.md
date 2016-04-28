# silverstripe-flashmessage
[![Scrutinizer](https://img.shields.io/scrutinizer/g/axyr/silverstripe-flashmessage.svg)](https://scrutinizer-ci.com/g/axyr/silverstripe-flashmessage/)
[![Packagist](https://img.shields.io/packagist/dt/axyr/silverstripe-flashmessage.svg)](https://packagist.org/packages/axyr/silverstripe-flashmessage)
[![Packagist](https://img.shields.io/packagist/v/axyr/silverstripe-flashmessage.svg)](https://packagist.org/packages/axyr/silverstripe-flashmessage)

Display simple one-time flash message with Twitter Bootstrap or Zurb Foundation markup.

```php
    public function submitForm($data, Form $form)
    {
        $form->saveInto($this->record);
        $this->record->write();
    
        Flash::success('Form saved');
    
        return $this->controller->redirect($this->controller->Link());
    }
```

## Installation

```
$ composer require axyr/silverstripe-flashmessage
```

## Usage
The FlashMessage template has all the markup and attributes so that it will play nicely with the Twitter Bootstrap and Zurb Foundation frameworks.

http://foundation.zurb.com/sites/docs/callout.html

You can set a colored flash message with te following methods:
```php
Flash::info('Some message');
Flash::success('Some message');
Flash::warning('Some message');
Flash::danger('Some message'); // Bootstrap
Flash::alert('Some message'); // Foundation
```

By default the message will be closable, but this can be disabled.
You can also set the message to automaticly fadeout.

For this to work, we assume jQuery is used and the flashmessage.js file is added to the Requirements::javascript();

```php
Flash::success('You cannot close me', false);
Flash::success('I will fade out', false, true);
```

## Config
```
FlashMessage:
   defaults:
     Type: success
     Closable: true
     FadeOut: false
   supported_methods:
     - info
     - success
     - warning
     - danger
     - alert
   template: FlashMessage
   session_name: FlashMessage
   load_javascript: true
```
